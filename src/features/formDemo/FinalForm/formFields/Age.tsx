import NumberInput from "@/components/NumberInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FinalFormType } from "../validation/formValidation";

type AgeProps = {
  register: UseFormRegister<FinalFormType>;
  errors: FieldErrors<FinalFormType>;
};

const Age = (props: AgeProps) => {
  const { register, errors } = props;

  return (
    <NumberInput
      name="age"
      label="Age"
      placeholder="Age"
      registerReturn={register("age", {
        valueAsNumber: true,
      })}
      fieldError={errors.age}
    />
  );
};

export default Age;
