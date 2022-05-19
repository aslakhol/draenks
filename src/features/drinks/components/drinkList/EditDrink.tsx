import type { Drinks, IngredientForDrink } from "@prisma/client";
import { useState } from "react";
import NewDrinkModal from "./NewDrinkModal";

type EditDrinkProps = { drink: Drinks & { ingredients: IngredientForDrink[] } };

const EditDrink = (props: EditDrinkProps) => {
  const { drink } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit<span className="sr-only">, {drink.drinkName}</span>
      </button>
      {modalOpen && (
        <NewDrinkModal
          open={modalOpen}
          setOpen={setModalOpen}
          defaultDrink={drink}
        />
      )}
    </>
  );
};

export default EditDrink;
