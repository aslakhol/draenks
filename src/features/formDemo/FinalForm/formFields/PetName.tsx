import TextInput from "@/components/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FinalFormType } from "../validation/formValidation";

type PetNameProps = {
  register: UseFormRegister<FinalFormType>;
  errors: FieldErrors<FinalFormType>;
};

const PetName = (props: PetNameProps) => {
  const { register, errors } = props;

  return (
    <TextInput
      name="petName"
      label="PetName"
      placeholder="PetName"
      registerReturn={register("petName")}
      fieldError={errors.petName}
    />
  );
};

export default PetName;
