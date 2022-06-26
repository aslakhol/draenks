import TextArea from "@/components/TextArea";
import { useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";

const Instructions = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewDrinkFormType>();

  return (
    <TextArea
      name="instructions"
      label="Instructions"
      placeholder="How to make the cocktail"
      registerReturn={register("instructions")}
      fieldError={errors.instructions}
    />
  );
};

export default Instructions;
