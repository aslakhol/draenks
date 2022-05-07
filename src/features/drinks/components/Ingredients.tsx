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
    <>
      Ingredients
      {fields.map((_, index) => {
        return (
          <div key={`ingredientForDrink-${index}`}>
            <IngredientId index={index} />
            <Amount index={index} />
            <Unit index={index} />
          </div>
        );
      })}
      <PlusButton onClick={() => append({ amount: 0, unit: "ML" })} />
    </>
  );
};

export default Ingredients;
