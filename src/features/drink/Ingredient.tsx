import type { MeasuringUnit } from "@prisma/client";
import { useState } from "react";
import DisplayIngredientModal from "../ingredients/components/DisplayIngredientModal";

type IngredientProps = {
  ingredient: {
    ingredient: {
      ingredientName: string;
      ingredientId: number;
    };
    amount: number;
    unit: MeasuringUnit;
    ingredientForDrinkId: number;
  };
};

const Ingredient = (props: IngredientProps) => {
  const { ingredient } = props;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <tr>
        <td
          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0 hover:underline cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          {ingredient.ingredient.ingredientName}
        </td>
        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
          {ingredient.amount} {ingredient.unit}
        </td>
      </tr>
      <DisplayIngredientModal
        open={modalOpen}
        setOpen={setModalOpen}
        ingredientId={ingredient.ingredient.ingredientId}
      />
    </>
  );
};

export default Ingredient;
