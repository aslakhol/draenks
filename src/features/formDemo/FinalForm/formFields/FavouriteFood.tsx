import TextInput from "@/components/TextInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FinalFormType } from "../validation/formValidation";

type FavouriteFoodProps = {
  register: UseFormRegister<FinalFormType>;
  errors: FieldErrors<FinalFormType>;
};

const FavouriteFood = (props: FavouriteFoodProps) => {
  const { register, errors } = props;

  return (
    <TextInput
      name="favouriteFood"
      label="FavouriteFood"
      placeholder="FavouriteFood"
      registerReturn={register("favouriteFood")}
      fieldError={errors.favouriteFood}
    />
  );
};

export default FavouriteFood;
