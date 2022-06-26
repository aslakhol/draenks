import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import DisplayDrinkModal from "./DisplayDrinkModal";

type DrinkProps = {
  drinkId: number;
};

const Drink = (props: DrinkProps) => {
  const { drinkId } = props;
  const { data: drink } = trpc.useQuery(["drink", { drinkId: drinkId }]);
  const [modalOpen, setModalOpen] = useState(false);

  if (!drink) {
    return <Loading />;
  }

  return (
    <div
      key={drink.drinkId}
      onClick={() => setModalOpen(true)}
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
          <span
            key={ingredient.ingredientForDrinkId}
            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 max-h-8 break-normal"
          >
            {ingredient.ingredient.ingredientName}
          </span>
        ))}
      </div>
      <DisplayDrinkModal
        open={modalOpen}
        setOpen={setModalOpen}
        drinkId={drinkId}
      />
    </div>
  );
};

export default Drink;
