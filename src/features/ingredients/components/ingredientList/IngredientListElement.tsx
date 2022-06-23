import type { Ingredients } from "@prisma/client";
import EditIngredient from "../edit/EditIngredient";

type IngredientListElementProps = {
  ingredient: Ingredients;
};

const IngredientListElement = (props: IngredientListElementProps) => {
  const { ingredient } = props;

  return (
    <>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {ingredient.ingredientName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {ingredient.description}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <EditIngredient ingredient={ingredient} />
      </td>
    </>
  );
};

export default IngredientListElement;
