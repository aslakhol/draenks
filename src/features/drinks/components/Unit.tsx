import Select from "@/components/Select";
import type { MeasuringUnit } from "@prisma/client";
import { useController, useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";

type UnitProps = { index: number };

const Unit = (props: UnitProps) => {
  const { index } = props;
  const {
    formState: { errors },
    control,
  } = useFormContext<NewDrinkFormType>();

  const { field } = useController({ name: `variant`, control });

  let err = undefined;

  if (errors.ingredients) {
    err = errors.ingredients[index]?.unit;
  }

  // TODO add errors to select

  return (
    <Select
      labelText="Foo"
      items={UnitOptions}
      displayValueFunction={(item) => item.toLocaleLowerCase()}
      idFunction={(item) => item}
      onItemSelected={(item) => field.onChange(item)}
    />
  );
};

export default Unit;

const UnitOptions: MeasuringUnit[] = [
  "ML",
  "OZ",
  "PC",
  "DROP",
  "DASH",
  "WASH",
  "BARSPOON",
];
