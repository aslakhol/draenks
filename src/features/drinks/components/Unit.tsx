import Select from "@/components/Select";
import { useController, useFormContext } from "react-hook-form";
import { NewDrinkFormType } from "../formValidation";

type UnitProps = { index: number };

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

export type PeopleType = typeof people[0];

const Unit = (props: UnitProps) => {
  const { index } = props;
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<NewDrinkFormType>();

  const { field } = useController({ name: `variant`, control });

  let err = undefined;

  if (errors.ingredients) {
    err = errors.ingredients[index]?.unit;
  }

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

export default Unit;
