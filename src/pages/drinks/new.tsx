import Combobox from "@/components/ComboBox";
import NewDrinkForm from "@/features/drinks/components/NewDrinkForm";
import { NewDrinkFormType } from "@/features/drinks/formValidation";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { SubmitHandler } from "react-hook-form";

const NewDrinksPage: NextPage = () => {
  const { data, refetch } = trpc.useQuery(["drinks"]);

  const mutation = trpc.useMutation(["create-drink"], {
    onSuccess: () => refetch(),
  });

  const onSubmit: SubmitHandler<NewDrinkFormType> = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  const people = [
    { id: 1, name: "Leslie Alexander" },
    { id: 2, name: "aaaa Alexander" },
    { id: 3, name: "bbbb Alexander" },
    { id: 4, name: "ccccc Alexander" },
    // More users...
  ];

  return (
    <>
      <h1>IngredientPage</h1>
      <NewDrinkForm onSubmit={onSubmit} />

      {data?.map((drink) => (
        <div key={drink.drinkId}>
          {drink.drinkName} {drink.description}
        </div>
      ))}
      <Combobox<typeof people[0]>
        labelText="Foo"
        items={people}
        displayValueFunction={(a) => a?.name}
        idFunction={(item) => item.id.toString()}
        onItemSelected={(item) => console.log(item)}
      />
    </>
  );
};

export default NewDrinksPage;
