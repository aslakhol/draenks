import TextInput from "@/components/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FinalFormType } from "../validation/formValidation";

type DescriptionProps = {
  register: UseFormRegister<FinalFormType>;
  errors: FieldErrors<FinalFormType>;
};

const Description = (props: DescriptionProps) => {
  const { register, errors } = props;

  return (
    <TextInput
      name="description"
      label="Description"
      placeholder="Description"
      registerReturn={register("description")}
      fieldError={errors.description}
    />
  );
};

export default Description;
