import TextInput from "@/components/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewIngredientFormType } from "../types";

type NewIngredientFormProps = {
  onSubmit: SubmitHandler<NewIngredientFormType>;
};

const NewIngredientForm = (props: NewIngredientFormProps) => {
  const { onSubmit } = props;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewIngredientFormType>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="ingredientName"
        label="Name"
        placeholder="Name of ingredient"
        register={register}
        fieldError={errors.ingredientName}
      />
      <TextInput
        name="description"
        label="Description"
        placeholder="Description of ingredient"
        register={register}
        fieldError={errors.description}
      />
      <button
        type="submit"
        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </form>
  );
};

export default NewIngredientForm;
