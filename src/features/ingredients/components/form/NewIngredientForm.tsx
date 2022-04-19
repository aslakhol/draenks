import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { newIngredientFormSchema, NewIngredientFormType } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import IngredientName from "./IngredientName";
import Description from "./Description";

type NewIngredientFormProps = {
  onSubmit: SubmitHandler<NewIngredientFormType>;
};

const NewIngredientForm = (props: NewIngredientFormProps) => {
  const { onSubmit } = props;

  const methods = useForm<NewIngredientFormType>({
    resolver: zodResolver(newIngredientFormSchema),
  });

  const submitBtn =
    "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <IngredientName />
        <Description />
        <button type="submit" className={submitBtn}>
          Save
        </button>
      </form>
    </FormProvider>
  );
};

export default NewIngredientForm;
