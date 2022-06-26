import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";

const Menu = () => {
  const { data: drinks, isSuccess } = trpc.useQuery(["drinks"]);
  const { data: ingredients, isSuccess: ingredientsIsSuccess } = trpc.useQuery([
    "ingredients",
  ]);

  if (!isSuccess || !ingredientsIsSuccess) {
    return <Loading />;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-gray-900 pb-8 pt-1">
        Cocktails on the menu
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {drinks.map((drink) => (
          <a
            key={drink.drinkId}
            href="#"
            className="focus:outline-none relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex flex-col justify-between hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  {drink.drinkName}
                </span>
                <span className="text-sm text-gray-500 truncate">
                  {drink.variant}
                </span>
              </div>
              <p className="text-sm text-gray-500">{drink.description}</p>
            </div>
            <div className="py-2" />
            <div className="flex gap-2 flex-wrap">
              {drink.ingredients.map((ingredient) => (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 max-h-8 break-normal">
                  {
                    ingredients.find(
                      (i) => ingredient.ingredientId === i.ingredientId
                    )?.ingredientName
                  }
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
