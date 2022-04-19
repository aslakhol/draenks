import TextInput from "@/components/TextInput";
import { useFormContext } from "react-hook-form";
import { NewIngredientFormType } from "../../formValidation";

const IngredientName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewIngredientFormType>();

  return (
    <TextInput
      name="ingredientName"
      label="Name"
      placeholder="Name of ingredient"
      registerReturn={register("ingredientName")}
      fieldError={errors.ingredientName}
    />
  );
};

export default IngredientName;
