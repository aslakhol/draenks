import type { Drinks, IngredientForDrink } from "@prisma/client";
import EditDrink from "../edit/EditDrink";

type DrinkListElementProps = {
  drink: Drinks & { ingredients: IngredientForDrink[] };
};

const DrinkListElement = (props: DrinkListElementProps) => {
  const { drink } = props;

  const displayDescriptionLength = 150;

  const elipses =
    drink.description && drink.description.length > displayDescriptionLength
      ? "..."
      : "";

  return (
    <>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.variant}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.description?.slice(0, displayDescriptionLength)}
        {elipses}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <EditDrink drink={drink} />
      </td>
    </>
  );
};

export default DrinkListElement;
