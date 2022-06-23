import { useState } from "react";
import NewIngredientModal from "./NewIngredientModal";

const NewIngredient = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={btnStyle}
      >
        Add ingredient
      </button>
      {modalOpen && (
        <NewIngredientModal open={modalOpen} setOpen={setModalOpen} />
      )}
    </>
  );
};

export default NewIngredient;

const btnStyle =
  "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto";
