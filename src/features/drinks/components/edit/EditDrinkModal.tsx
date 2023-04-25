import { trpc } from "@/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { newDrinkFormSchema, NewDrinkFormType } from "../../formValidation";
import Modal from "../../../../components/Modal/Modal";
import DrinkForm from "../form/DrinkForm";
import { useQueryClient } from "react-query";
import { Drink, IngredientForDrink } from "../../../../backend/utils/zod";

type EditDrinkModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultDrink: Drink & { ingredients: IngredientForDrink[] };
};

const EditDrinkModal = (props: EditDrinkModalProps) => {
  const { open, setOpen, defaultDrink } = props;
  const methods = useForm<NewDrinkFormType>({
    defaultValues: defaultDrink,
    resolver: zodResolver(newDrinkFormSchema),
  });
  const queryClient = useQueryClient();

  const mutation = trpc.useMutation(["edit-drink"], {
    onSuccess: () => {
      queryClient.refetchQueries(["drinks"]);
      setOpen(false);
    },
  });

  const onSubmit: SubmitHandler<NewDrinkFormType> = (formData) => {
    mutation.mutate({ drinkId: defaultDrink.drinkId, drink: formData });
  };

  const deleteDrink = trpc.useMutation(["delete-drink"], {
    onSuccess: () => {
      queryClient.refetchQueries(["drinks"]);
      setOpen(false);
    },
  });

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={"Edit drink"}
      primaryAction={methods.handleSubmit(onSubmit)}
      primaryLabel={"Save"}
      deleteAction={() => deleteDrink.mutate({ drinkId: defaultDrink.drinkId })}
    >
      <DrinkForm methods={methods} />
    </Modal>
  );
};

export default EditDrinkModal;
