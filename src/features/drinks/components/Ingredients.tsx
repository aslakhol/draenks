import PlusButton from "@/components/PlusButton";
import { useFieldArray } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";
import Amount from "./Amount";
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
      {fields.map((fieldArray, index) => {
        return (
          <div key={`ingredientForDrink-${index}`}>
            <Amount index={index} />
            <Unit index={0} />
          </div>
        );
      })}
      <PlusButton onClick={() => append({ amount: 0, unit: "ML" })} />
    </>
  );
};

export default Ingredients;
