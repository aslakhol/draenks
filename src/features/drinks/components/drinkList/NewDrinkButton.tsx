import Link from "next/link";
import { useState } from "react";
import Modal from "../Modal";
import ModalContent from "../ModalContent";

const NewDrinkButton = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        {/* <Link href="/drinks/new">Add drink</Link> */}
        Add drink
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        dialogHeader={"dialogHeader"}
        primaryAction={() => setOpen(false)}
        primaryLabel={"primaryLabel"}
      >
        <ModalContent />
      </Modal>
    </>
  );
};

export default NewDrinkButton;
