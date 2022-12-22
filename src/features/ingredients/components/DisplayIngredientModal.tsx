import Modal from "@/components/Modal/Modal";
import { trpc } from "@/utils/trpc";
import { Dispatch, SetStateAction } from "react";

type DisplayDrinkModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  ingredientId: number;
};

const DisplayIngredientModal = (props: DisplayDrinkModalProps) => {
  const { open, setOpen, ingredientId } = props;
  const { data: ingredient } = trpc.useQuery([
    "ingredient",
    { ingredientId: ingredientId },
  ]);

  if (!ingredient) {
    return <></>;
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={ingredient.ingredientName}
    >
      <div className="flex flex-col gap-2">
        <p className="italic text-xs">{ingredient.description}</p>
      </div>
    </Modal>
  );
};

export default DisplayIngredientModal;
