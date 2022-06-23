import { useState } from "react";
import NewDrinkModal from "./NewDrinkModal";

const NewDrink = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={btnStyle}
      >
        Add drink
      </button>
      {modalOpen && <NewDrinkModal open={modalOpen} setOpen={setModalOpen} />}
    </>
  );
};

export default NewDrink;

const btnStyle =
  "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto";
