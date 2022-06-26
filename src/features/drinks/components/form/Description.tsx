import TextArea from "@/components/TextArea";
import { useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

const Description = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewDrinkFormType>();

  return (
    <TextArea
      name="description"
      label="Description"
      placeholder="Description of the drink"
      registerReturn={register("description")}
      fieldError={errors.description}
    />
  );
};

export default Description;
