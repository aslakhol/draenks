import { trpc } from "@/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { newDrinkFormSchema, NewDrinkFormType } from "../../formValidation";
import Modal from "../Modal";
import DrinkForm from "../DrinkForm";
import type { Drinks, IngredientForDrink } from "@prisma/client";

type EditDrinkModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultDrink: Drinks & { ingredients: IngredientForDrink[] };
};

const EditDrinkModal = (props: EditDrinkModalProps) => {
  const { open, setOpen, defaultDrink } = props;
  const methods = useForm<NewDrinkFormType>({
    defaultValues: defaultDrink,
    resolver: zodResolver(newDrinkFormSchema),
  });
  const { refetch: refetchDrinks } = trpc.useQuery(["drinks"]);

  const mutation = trpc.useMutation(["edit-drink"], {
    onSuccess: () => {
      refetchDrinks();
      setOpen(false);
    },
  });

  const onSubmit: SubmitHandler<NewDrinkFormType> = (data) => {
    mutation.mutate({ drinkId: defaultDrink.drinkId, drink: data });
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={"Edit drink"}
      primaryAction={methods.handleSubmit(onSubmit)}
      primaryLabel={"Save"}
    >
      <DrinkForm methods={methods} />
    </Modal>
  );
};

export default EditDrinkModal;
