import { trpc } from "@/utils/trpc";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { NewDrinkFormType } from "../../formValidation";
import Modal from "../Modal";
import NewDrinkForm from "../NewDrinkForm";

const NewDrink = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { refetch } = trpc.useQuery(["drinks"]);

  const mutation = trpc.useMutation(["create-drink"], {
    onSuccess: () => refetch(),
  });

  const onSubmit: SubmitHandler<NewDrinkFormType> = (data) => {
    mutation.mutate(data);
    setOpen(false);
  };

  const btnStyle =
    "inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto";

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={btnStyle}>
        Add drink
      </button>
      <Modal
        open={open}
        setOpen={setOpen}
        dialogHeader={"Create new drink"}
        primaryAction={() => setOpen(false)}
        primaryLabel={"Create"}
      >
        <NewDrinkForm onSubmit={onSubmit} />
      </Modal>
    </>
  );
};

export default NewDrink;
