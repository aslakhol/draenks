import TextInput from "@/components/TextInput";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

export type NewIngredientFormType = {
  ingredientName: string;
  description?: string;
};

const NewIngredientPage: NextPage = () => {
  const { data, refetch } = trpc.useQuery(["ingredients"]);
  const mutation = trpc.useMutation(["create-ingredient"], {
    onSuccess: () => refetch(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewIngredientFormType>();

  const onSubmit: SubmitHandler<NewIngredientFormType> = (data) => {
    mutation.mutate(data);

    console.log(data);
  };

  return (
    <>
      <h1>IngredientPage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="ingredientName"
          label="Name"
          placeholder="Name of ingredient"
          register={register}
          fieldError={errors.ingredientName}
        />
        <TextInput
          name="description"
          label="Descriton"
          placeholder="Description of ingredient"
          register={register}
          fieldError={errors.description}
        />
        <button
          type="submit"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </form>

      {data?.map((ingredient) => (
        <div key={ingredient.ingredientId}>
          {ingredient.ingredientName} {ingredient.description}
        </div>
      ))}
    </>
  );
};

export default NewIngredientPage;
