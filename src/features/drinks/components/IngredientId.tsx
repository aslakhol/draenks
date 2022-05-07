import Combobox from "@/components/ComboBox";
import { trpc } from "@/utils/trpc";
import { useController, useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";

type IngredientIdProps = { index: number };

const IngredientId = (props: IngredientIdProps) => {
  const { index } = props;
  const { data: ingredients } = trpc.useQuery(["ingredients"]);

  const {
    formState: { errors },
    control,
  } = useFormContext<NewDrinkFormType>();

  const { field } = useController({
    name: `ingredients.${index}.ingredientId`,
    control,
  });

  let err = undefined;

  if (errors.ingredients) {
    err = errors.ingredients[index]?.unit;
  }

  // TODO add errors to select

  return (
    <Combobox
      labelText="Foo"
      items={ingredients || []}
      displayValueFunction={(item) => item?.ingredientName || ""}
      idFunction={(item) => item?.ingredientId.toString() || ""}
      onItemSelected={(item) => field.onChange(item?.ingredientId)}
    />
  );
};

export default IngredientId;
