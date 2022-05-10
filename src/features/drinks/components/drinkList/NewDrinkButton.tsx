import { useState } from "react";
import Modal from "../Modal";
import ModalContent from "../ModalContent";

const NewDrinkButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  const btnStyle =
    "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={btnStyle}>
        Add drink
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        dialogHeader={"Create new drink"}
        primaryAction={() => setOpen(false)}
        primaryLabel={"Create"}
      >
        <ModalContent />
      </Modal>
    </>
  );
};

export default NewDrinkButton;
