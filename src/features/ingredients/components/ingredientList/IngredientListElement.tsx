import { useState } from "react";
import DisplayIngredientModal from "../DisplayIngredientModal";
import { Ingredient } from "../../../../backend/utils/zod";

type IngredientListElementProps = {
  ingredient: Ingredient;
};

const IngredientListElement = (props: IngredientListElementProps) => {
  const { ingredient } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const downloadUrl = prepareJson(ingredient);
  const downloadName = `${ingredient.ingredientName
    .toLocaleLowerCase()
    .replaceAll(" ", "-")}.json`;

  return (
    <>
      <tr>
        <td
          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 hover:underline cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          {ingredient.ingredientName}
        </td>

        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate max-w-xl hidden md:block">
          {ingredient.description}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <a href={downloadUrl} download={downloadName}>
            Download
          </a>
        </td>
        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <EditIngredient ingredient={ingredient} />
        </td> */}
      </tr>
      <DisplayIngredientModal
        ingredientId={ingredient.ingredientId}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </>
  );
};

export default IngredientListElement;

const prepareJson = (ingredient: {
  ingredientName: string;
  ingredientId: number;
}) => {
  const json = JSON.stringify(ingredient);
  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);

  return href;
};
