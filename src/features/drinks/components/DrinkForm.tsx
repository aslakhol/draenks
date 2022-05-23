import { FormProvider, UseFormReturn } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";
import Description from "./formElements/Description";
import DrinkName from "./formElements/DrinkName";
import Ingredients from "./formElements/Ingredients";
import Instructions from "./formElements/Instructions";
import Variant from "./formElements/Variant";

type DrinkFormProps = {
  methods: UseFormReturn<NewDrinkFormType>;
};

const DrinkForm = (props: DrinkFormProps) => {
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

export default DrinkForm;
