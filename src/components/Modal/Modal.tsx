import { Dispatch, Fragment, SetStateAction, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ModalBody from "./ModalBody";

type ModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  dialogHeader: string;
  primaryAction?: () => void;
  primaryLabel?: string;
  deleteAction?: () => void;
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  const {
    open,
    setOpen,
    dialogHeader,
    primaryAction,
    primaryLabel,
    deleteAction,
    children,
  } = props;

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <ModalBody
              setOpen={setOpen}
              cancelButtonRef={cancelButtonRef}
              dialogHeader={dialogHeader}
              primaryAction={primaryAction}
              primaryLabel={primaryLabel}
              deleteAction={deleteAction}
            >
              {children}
            </ModalBody>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
