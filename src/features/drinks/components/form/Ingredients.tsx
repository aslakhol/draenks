import PlusButton from "@/components/PlusButton";
import { trpc } from "@/utils/trpc";
import { useFieldArray } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";
import Amount from "./Amount";
import IngredientId from "./IngredientId";
import Unit from "./Unit";

type IngredientsProps = {};

const Ingredients = (props: IngredientsProps) => {
  const {} = props;

  const { fields, append, remove } = useFieldArray<
    NewDrinkFormType,
    "ingredients",
    "key"
  >({
    name: "ingredients",
    keyName: "key",
  });

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div className="px-4 py-2 sm:px-6">
        <h3>Ingredients</h3>
      </div>
      <div className="flex flex-col px-4 sm:px-6 gap-3 pt-2 ">
        {fields.map((_, index) => {
          return (
            <div
              key={`ingredientForDrink-${index} `}
              className={
                "flex flex-col gap-2 border border-gray-200 p-4 rounded"
              }
            >
              <IngredientId index={index} />
              <div className="flex justify-between">
                <Amount index={index} />
                <Unit index={index} />
              </div>
            </div>
          );
        })}
        <div className="w-full pb-2 flex justify-center">
          <PlusButton
            onClick={() =>
              append({ ingredientForDrinkId: null, amount: 0, unit: "ML" })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
