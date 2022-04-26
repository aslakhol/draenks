import { NewDrinkFormType } from "@/features/drinks/formValidation";
import { useFormContext, useController } from "react-hook-form";
import Combobox from "./ComboBox";

type ControlledComboboxProps = {};

const ControlledCombobox = (props: ControlledComboboxProps) => {
  const {} = props;

  const { control } = useFormContext<NewDrinkFormType>();

  const { field } = useController({ name: `variant`, control });

  const people = [
    { id: 1, name: "Leslie Alexander" },
    { id: 2, name: "aaaa Alexander" },
    { id: 3, name: "bbbb Alexander" },
    { id: 4, name: "ccccc Alexander" },
    // More users...
  ];

  return (
    <Combobox
      labelText="Foo"
      items={people}
      displayValueFunction={(a) => a?.name}
      idFunction={(item) => item.id.toString()}
      onItemSelected={(item) => field.onChange(item?.name || "")}
    />
  );
};

export default ControlledCombobox;
