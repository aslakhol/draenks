import NewIngredientForm from "@/features/ingredients/components/form/NewIngredientForm";
import { NewIngredientFormType } from "@/features/ingredients/types";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { SubmitHandler } from "react-hook-form";

const NewIngredientPage: NextPage = () => {
  const { data, refetch } = trpc.useQuery(["ingredients"]);

  const mutation = trpc.useMutation(["create-ingredient"], {
    onSuccess: () => refetch(),
  });

  const onSubmit: SubmitHandler<NewIngredientFormType> = (data) => {
    mutation.mutate(data);
    console.log(data);
  };

  return (
    <>
      <h1>IngredientPage</h1>
      <NewIngredientForm onSubmit={onSubmit} />

      {data?.map((ingredient) => (
        <div key={ingredient.ingredientId}>
          {ingredient.ingredientName} {ingredient.description}
        </div>
      ))}
    </>
  );
};

export default NewIngredientPage;
