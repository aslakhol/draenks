import { FormProvider, UseFormReturn } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";
import Description from "./Description";
import DrinkName from "./DrinkName";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Variant from "./Variant";

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
