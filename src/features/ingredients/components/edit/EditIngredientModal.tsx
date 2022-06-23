import { trpc } from "@/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  newIngredientFormSchema,
  NewIngredientFormType,
} from "../../formValidation";
import type { Ingredients } from "@prisma/client";
import Modal from "@/components/Modal/Modal";
import IngredientForm from "../form/IngredientForm";

type EditIngredientModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  defaultIngredient: Ingredients;
};

const EditIngredientModal = (props: EditIngredientModalProps) => {
  const { open, setOpen, defaultIngredient } = props;
  const methods = useForm<NewIngredientFormType>({
    defaultValues: defaultIngredient,
    resolver: zodResolver(newIngredientFormSchema),
  });
  const { refetch: refetchIngredients } = trpc.useQuery(["ingredients"]);

  const mutation = trpc.useMutation(["edit-ingredient"], {
    onSuccess: () => {
      refetchIngredients();
      setOpen(false);
    },
  });

  const onSubmit: SubmitHandler<NewIngredientFormType> = (formData) => {
    mutation.mutate({
      ingredientId: defaultIngredient.ingredientId,
      ingredient: formData,
    });
  };

  const deleteIngredient = trpc.useMutation(["delete-ingredient"], {
    onSuccess: () => {
      refetchIngredients();
      setOpen(false);
    },
  });

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={"Edit ingredient"}
      primaryAction={methods.handleSubmit(onSubmit)}
      primaryLabel={"Save"}
      deleteAction={() =>
        deleteIngredient.mutate({
          ingredientId: defaultIngredient.ingredientId,
        })
      }
    >
      <IngredientForm methods={methods} />
    </Modal>
  );
};

export default EditIngredientModal;
