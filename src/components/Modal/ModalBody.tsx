import { Transition, Dialog } from "@headlessui/react";
import { Dispatch, Fragment, MutableRefObject, SetStateAction } from "react";

type ModalBodyProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  cancelButtonRef: MutableRefObject<null>;
  dialogHeader: string;
  primaryAction: () => void;
  primaryLabel?: string;
  deleteAction?: () => void;
  children: React.ReactNode;
};

const ModalBody = (props: ModalBodyProps) => {
  const {
    setOpen,
    cancelButtonRef,
    dialogHeader,
    primaryAction,
    primaryLabel,
    children,
    deleteAction,
  } = props;

  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <Dialog.Panel className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="mt-3 text-center sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              {dialogHeader}
            </Dialog.Title>
            <div className="mt-2">{children}</div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between">
          <div className="sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              onClick={primaryAction}
            >
              {primaryLabel}
            </button>
            <div className="ml-3" />
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setOpen(false)}
              ref={cancelButtonRef}
            >
              Cancel
            </button>
          </div>
          {deleteAction && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
              onClick={deleteAction}
            >
              Delete
            </button>
          )}
        </div>
      </Dialog.Panel>
    </Transition.Child>
  );
};

export default ModalBody;
