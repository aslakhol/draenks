import TextInput from "@/components/TextInput";
import { useFormContext } from "react-hook-form";
import { NewIngredientFormType } from "../../types";

const Description = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewIngredientFormType>();

  return (
    <TextInput
      name="description"
      label="Description"
      placeholder="Description of ingredient"
      register={register}
      fieldError={errors.ingredientName}
    />
  );
};

export default Description;
