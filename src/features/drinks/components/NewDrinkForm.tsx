import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";
import Description from "./formElements/Description";
import DrinkName from "./formElements/DrinkName";
import Ingredients from "./formElements/Ingredients";
import Instructions from "./formElements/Instructions";
import Variant from "./formElements/Variant";

type NewDrinkFormProps = {
  methods: UseFormReturn<NewDrinkFormType>;
};

const NewDrinkForm = (props: NewDrinkFormProps) => {
  const { methods } = props;

  return (
    <FormProvider {...methods}>
      <form>
        <DrinkName />
        <Description />
        <Instructions />
        <Variant />
        <Ingredients />
      </form>
    </FormProvider>
  );
};

export default NewDrinkForm;
