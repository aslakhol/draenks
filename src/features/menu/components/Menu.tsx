import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";
import Drink from "./Drink";

const Menu = () => {
  const { data: drinks, isSuccess } = trpc.useQuery(["drinks"]);

  if (!isSuccess) {
    return <Loading />;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl font-semibold text-gray-900 pb-8 pt-1">
        Cocktails on the menu
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {drinks.map((drink) => (
          <Drink key={drink.drinkId} drinkId={drink.drinkId} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
