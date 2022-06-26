import Loading from "@/components/Loading";
import Modal from "@/components/Modal/Modal";
import { trpc } from "@/utils/trpc";
import { Dispatch, SetStateAction } from "react";

type DisplayDrinkModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  drinkId: number;
};

const DisplayDrinkModal = (props: DisplayDrinkModalProps) => {
  const { open, setOpen, drinkId } = props;

  const { data: drink } = trpc.useQuery(["drink", { drinkId: drinkId }]);

  if (!drink) {
    return <Loading />;
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={drink.drinkName}
      primaryAction={() => setOpen(false)}
      primaryLabel={"Done"}
    >
      <div className="flex flex-col gap-2">
        <p className="italic text-xs">{drink.description}</p>
        <table className="min-w-full divide-y divide-gray-300">
          <tbody className="divide-y divide-gray-200">
            {drink.ingredients.map((ingredient) => (
              <tr key={ingredient.ingredientForDrinkId}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                  {ingredient.ingredient.ingredientName}
                </td>
                <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                  {ingredient.amount} {ingredient.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{drink.instructions}</p>
      </div>
    </Modal>
  );
};

export default DisplayDrinkModal;
