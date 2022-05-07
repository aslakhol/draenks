import PlusButton from "@/components/PlusButton";
import { trpc } from "@/utils/trpc";
import { useFieldArray } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";
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
      <div className="px-4 py-5 sm:px-6">
        <h3>Ingredients in drink</h3>
      </div>
      <div className="px-4 py-5 sm:p-6">
        {fields.map((_, index) => {
          return (
            <div
              key={`ingredientForDrink-${index} `}
              className={"border border-gray-200 p-4 rounded m-4"}
            >
              <IngredientId index={index} />
              <Amount index={index} />
              <Unit index={index} />
            </div>
          );
        })}

        <PlusButton onClick={() => append({ amount: 0, unit: "ML" })} />
      </div>
    </div>
  );
};

export default Ingredients;
