import TextInput from "@/components/TextInput";
import { useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

const DrinkName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewDrinkFormType>();

  return (
    <TextInput
      name="drinkName"
      label="Name"
      placeholder="Name of drink"
      registerReturn={register("drinkName")}
      fieldError={errors.drinkName}
    />
  );
};

export default DrinkName;
