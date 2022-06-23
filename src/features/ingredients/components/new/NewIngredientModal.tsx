import Modal from "@/components/Modal/Modal";
import { trpc } from "@/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  newIngredientFormSchema,
  NewIngredientFormType,
} from "../../formValidation";
import IngredientForm from "../form/IngredientForm";

type NewIngredientModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const NewIngredientModal = (props: NewIngredientModalProps) => {
  const { open, setOpen } = props;
  const methods = useForm<NewIngredientFormType>({
    resolver: zodResolver(newIngredientFormSchema),
  });
  const { refetch: refetchIngredients } = trpc.useQuery(["ingredients"]);

  const mutation = trpc.useMutation(["create-ingredient"], {
    onSuccess: () => {
      refetchIngredients();
      setOpen(false);
    },
  });

  const onSubmit: SubmitHandler<NewIngredientFormType> = (data) => {
    mutation.mutate(data);
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={"Create new ingredient"}
      primaryAction={methods.handleSubmit(onSubmit)}
      primaryLabel={"Create"}
    >
      <IngredientForm methods={methods} />
    </Modal>
  );
};

export default NewIngredientModal;
