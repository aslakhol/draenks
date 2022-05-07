import Select from "@/components/Select";
import { NewDrinkFormType } from "@/features/drinks/formValidation";
import { useController, useFormContext } from "react-hook-form";

type ControllerSelectProps = { index: number };

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

const ControllerSelect = (props: ControllerSelectProps) => {
  const { control } = useFormContext<NewDrinkFormType>();

  const { field } = useController({ name: `variant`, control });

  return (
    <Select
      labelText="Foo"
      items={people}
      displayValueFunction={(a) => a.name}
      idFunction={(item) => item.id}
      onItemSelected={(item) => field.onChange(item.name)}
    />
  );
};

export default ControllerSelect;
