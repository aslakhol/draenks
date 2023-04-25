import { useState } from "react";
import EditIngredientModal from "./EditIngredientModal";
import { Ingredient } from "../../../../backend/utils/zod";

type EditIngredientProps = {
  ingredient: Ingredient;
};

const EditIngredient = (props: EditIngredientProps) => {
  const { ingredient } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit<span className="sr-only">, {ingredient.ingredientName}</span>
      </button>
      {modalOpen && (
        <EditIngredientModal
          open={modalOpen}
          setOpen={setModalOpen}
          defaultIngredient={ingredient}
        />
      )}
    </>
  );
};

export default EditIngredient;
