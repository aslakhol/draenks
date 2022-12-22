import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";
import Ingredient from "./Ingredient";

type DrinkProps = { drinkId: number };

const Drink = (props: DrinkProps) => {
  const { drinkId } = props;
  const { data: drink, isLoading } = trpc.useQuery([
    "drink",
    { drinkId: drinkId },
  ]);

  if (isLoading) {
    return <Loading />;
  }

  if (!drink) {
    return <p>Drink with id: {drinkId} not found.</p>;
  }

  return (
    <div className="flex flex-col w-1/2 mx-auto pt-6">
      <div className="pb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          {drink.drinkName}
        </h1>
        <h2 className="text-sm text-gray-600">{drink.variant}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="italic text-xs">{drink.description}</p>
        <table className="min-w-full divide-y divide-gray-300">
          <tbody className="divide-y divide-gray-200">
            {drink.ingredients.map((ingredient) => (
              <Ingredient
                key={ingredient.ingredientForDrinkId}
                ingredient={ingredient}
              />
            ))}
          </tbody>
        </table>
        <p>{drink.instructions}</p>
      </div>
    </div>
  );
};

export default Drink;
