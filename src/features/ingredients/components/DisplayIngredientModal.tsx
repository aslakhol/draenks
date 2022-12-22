import Modal from "@/components/Modal/Modal";
import type { Ingredients } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

type DisplayDrinkModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  ingredient: Ingredients;
};

const DisplayIngredientModal = (props: DisplayDrinkModalProps) => {
  const { open, setOpen, ingredient } = props;

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
