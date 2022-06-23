import Combobox from "@/components/ComboBox";
import { trpc } from "@/utils/trpc";
import type { Ingredients } from "@prisma/client";
import { useController, useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

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
    err = errors.ingredients[index]?.ingredientId;
  }

  const defaultValue: Ingredients | undefined = ingredients?.find(
    (ingredient) => ingredient.ingredientId === field.value
  );

  if (!defaultValue && field.value) {
    return <>Loading ingredient name</>;
  }

  // TODO add errors to select

  return (
    <Combobox
      labelText="Ingredient"
      items={ingredients || []}
      displayValueFunction={(item) => item?.ingredientName || ""}
      idFunction={(item) => item?.ingredientId.toString() || ""}
      onItemSelected={(item) => field.onChange(item?.ingredientId)}
      fieldError={err}
      defaultValue={defaultValue}
    />
  );
};

export default IngredientId;
