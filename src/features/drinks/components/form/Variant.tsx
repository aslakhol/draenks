import TextInput from "@/components/TextInput";
import { useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

const Variant = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewDrinkFormType>();

  return (
    <TextInput
      name="variant"
      label="Variant"
      placeholder="Is the recipe a variant?"
      registerReturn={register("variant")}
      fieldError={errors.variant}
    />
  );
};

export default Variant;
