import PlusButton from "@/components/PlusButton";
import { useFieldArray } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";

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
      {fields.map((fieldArray, index) => {
        return <>Ingredient</>;
      })}
      <PlusButton onClick={() => console.log("plus")} />
    </>
  );
};

export default Ingredients;
