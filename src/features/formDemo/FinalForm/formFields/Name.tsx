import TextInput from "@/components/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FinalFormType } from "../validation/formValidation";

type NameProps = {
  register: UseFormRegister<FinalFormType>;
  errors: FieldErrors<FinalFormType>;
};

const Name = (props: NameProps) => {
  const { register, errors } = props;

  return (
    <TextInput
      name="name"
      label="Name"
      placeholder="Name"
      registerReturn={register("name")}
      fieldError={errors.name}
    />
  );
};

export default Name;
