import NumberInput from "@/components/NumberInput";
import { useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

type AmountProps = { index: number };

const Amount = (props: AmountProps) => {
  const { index } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext<NewDrinkFormType>();

  let err = undefined;

  if (errors.ingredients) {
    err = errors.ingredients[index]?.amount;
  }

  return (
    <NumberInput
      name={`${index}.amount`}
      label="Amount"
      placeholder="Amount of ingredient"
      registerReturn={register(`ingredients.${index}.amount`, {
        valueAsNumber: true,
      })}
      fieldError={err}
    />
  );
};

export default Amount;
