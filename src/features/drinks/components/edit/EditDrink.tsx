import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import EditDrinkModal from "./EditDrinkModal";

type EditDrinkProps = { drinkId: number };

const EditDrink = (props: EditDrinkProps) => {
  const { drinkId } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { data: drink } = trpc.useQuery(["drinkForEdit", { drinkId: drinkId }]);

  if (!drink) {
    return <Loading />;
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Edit
      </button>
      {modalOpen && (
        <EditDrinkModal
          open={modalOpen}
          setOpen={setModalOpen}
          defaultDrink={drink}
        />
      )}
    </>
  );
};

export default EditDrink;
