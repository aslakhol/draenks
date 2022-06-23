import { FormProvider, UseFormReturn } from "react-hook-form";
import { NewIngredientFormType } from "../../formValidation";
import Description from "./Description";
import IngredientName from "./IngredientName";

type IngredientFormProps = {
  methods: UseFormReturn<NewIngredientFormType>;
};

const IngredientForm = (props: IngredientFormProps) => {
  const { methods } = props;

  return (
    <FormProvider {...methods}>
      <form>
        <IngredientName />
        <Description />
      </form>
    </FormProvider>
  );
};

export default IngredientForm;
