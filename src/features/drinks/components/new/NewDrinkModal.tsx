import { trpc } from "@/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { newDrinkFormSchema, NewDrinkFormType } from "../../formValidation";
import Modal from "../../../../components/Modal/Modal";
import DrinkForm from "../form/DrinkForm";

type NewDrinkModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const NewDrinkModal = (props: NewDrinkModalProps) => {
  const { open, setOpen } = props;
  const methods = useForm<NewDrinkFormType>({
    resolver: zodResolver(newDrinkFormSchema),
  });
  const { refetch: refetchDrinks } = trpc.useQuery(["drinks"]);

  const mutation = trpc.useMutation(["create-drink"], {
    onSuccess: () => {
      refetchDrinks();
      setOpen(false);
    },
  });

  const onSubmit: SubmitHandler<NewDrinkFormType> = (data) => {
    mutation.mutate(data);
  };

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      dialogHeader={"Create new drink"}
      primaryAction={methods.handleSubmit(onSubmit)}
      primaryLabel={"Create"}
    >
      <DrinkForm methods={methods} />
    </Modal>
  );
};

export default NewDrinkModal;
