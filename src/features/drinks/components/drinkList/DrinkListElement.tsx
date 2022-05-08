import type { Drinks } from "@prisma/client";

type DrinkListElementProps = { drink: Drinks };

const DrinkListElement = (props: DrinkListElementProps) => {
  const { drink } = props;

  return (
    <>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.drinkName}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit<span className="sr-only">, {drink.drinkName}</span>
        </a>
      </td>
    </>
  );
};

export default DrinkListElement;
