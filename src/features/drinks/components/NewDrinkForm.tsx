import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewDrinkFormType, newDrinkFormSchema } from "../formValidation";
import DrinkName from "./DrinkName";
import Description from "./Description";
import Instructions from "./Instructions";
import Variant from "./Variant";
import Combobox from "@/components/ComboBox";
import ControlledCombobox from "@/components/ControlledCombobox";
import Ingredients from "./Ingredients";

type NewDrinkFormProps = {
  onSubmit: SubmitHandler<NewDrinkFormType>;
};

const NewDrinkForm = (props: NewDrinkFormProps) => {
  const { onSubmit } = props;

  const methods = useForm<NewDrinkFormType>({
    resolver: zodResolver(newDrinkFormSchema),
  });

  const submitBtn =
    "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DrinkName />
        <Description />
        <Instructions />
        <Variant />
        <Ingredients />
        <ControlledCombobox />
        <button type="submit" className={submitBtn}>
          Save
        </button>
      </form>
    </FormProvider>
  );
};

export default NewDrinkForm;
