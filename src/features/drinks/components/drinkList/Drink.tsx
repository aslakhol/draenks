import Loading from "@/components/Loading";
import DisplayDrinkModal from "@/features/menu/components/DisplayDrinkModal";
import { trpc } from "@/utils/trpc";
import type { Drinks } from "@prisma/client";
import { useState } from "react";
import EditDrink from "../edit/EditDrink";

type Props = {
  drinkId: number;
};

const Drink = (props: Props) => {
  const { drinkId } = props;
  const { data: drink } = trpc.useQuery(["drink", { drinkId: drinkId }]);

  const [modalOpen, setModalOpen] = useState(false);

  if (!drink) {
    return <></>;
  }

  return (
    <>
      <tr>
        <td
          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 hover:underline cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          {drink.drinkName}
          {drink.variant && (
            <span className="italic text-gray-500 text-sm">
              {" "}
              - {drink.variant}
            </span>
          )}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate max-w-xl hidden md:block">
          {drink.description}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <EditDrink drinkId={drink.drinkId} />
        </td>
      </tr>
      <DisplayDrinkModal
        open={modalOpen}
        setOpen={setModalOpen}
        drinkId={drink.drinkId}
      />
    </>
  );
};

export default Drink;
