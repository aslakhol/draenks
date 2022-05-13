import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Age from "./formFields/Age";
import Description from "./formFields/Description";
import FavouriteFood from "./formFields/FavouriteFood";
import Name from "./formFields/Name";
import PetName from "./formFields/PetName";
import SubmitButton from "./formFields/SubmitButton";
import { finalFormSchema, FinalFormType } from "./validation/formValidation";

const FinalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinalFormType>({
    resolver: zodResolver(finalFormSchema),
  });

  const onSubmit: SubmitHandler<FinalFormType> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>WithReactHookForms</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name register={register} errors={errors} />
        <Description register={register} errors={errors} />
        <Age register={register} errors={errors} />
        <PetName register={register} errors={errors} />
        <FavouriteFood register={register} errors={errors} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default FinalForm;
