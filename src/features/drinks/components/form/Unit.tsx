import Select from "@/components/Select";
import { useController, useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";
import { MeasurementUnit } from "../../../../backend/utils/zod";

type UnitProps = { index: number };

const Unit = (props: UnitProps) => {
  const { index } = props;
  const {
    formState: { errors },
    control,
  } = useFormContext<NewDrinkFormType>();

  const { field } = useController({
    name: `ingredients.${index}.unit`,
    control,
  });

  let err = undefined;

  if (errors.ingredients) {
    err = errors.ingredients[index]?.unit;
  }

  return (
    <Select
      labelText="Unit"
      items={UnitOptions}
      displayValueFunction={(item) => item.toLocaleLowerCase()}
      idFunction={(item) => item}
      onItemSelected={(item) => field.onChange(item)}
      fieldError={err}
    />
  );
};

export default Unit;

const UnitOptions: MeasurementUnit[] = [
  "ML",
  "OZ",
  "PC",
  "DROP",
  "DASH",
  "WASH",
  "BARSPOON",
];
