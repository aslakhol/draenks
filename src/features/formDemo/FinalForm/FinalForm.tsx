import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Age from "./formFields/Age";
import Description from "./formFields/Description";
import FavouriteFood from "./formFields/FavouriteFood";
import Name from "./formFields/Name";
import PetName from "./formFields/PetName";
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

  const submitBtn =
    "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  return (
    <div>
      <h2>WithReactHookForms</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Name register={register} errors={errors} />
        <Description register={register} errors={errors} />
        <Age register={register} errors={errors} />
        <PetName register={register} errors={errors} />
        <FavouriteFood register={register} errors={errors} />
        <button type="submit" className={submitBtn}>
          Save
        </button>
      </form>
    </div>
  );
};

export default FinalForm;
