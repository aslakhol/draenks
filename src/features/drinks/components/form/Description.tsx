import TextInput from "@/components/TextInput";
import { useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

const Description = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewDrinkFormType>();

  return (
    <TextInput
      name="description"
      label="Description"
      placeholder="Description of the drink"
      registerReturn={register("description")}
      fieldError={errors.description}
    />
  );
};

export default Description;
