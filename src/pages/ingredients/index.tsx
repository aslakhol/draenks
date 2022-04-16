import Loading from "@/components/Loading";
import Ingredients from "@/features/ingredients/components/Ingredients";
import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";

const IngredientsPage: NextPage = () => {
  const { data, isFetching } = trpc.useQuery(["ingredients"]);

  if (isFetching || !data) {
    return <Loading />;
  }

  return <Ingredients ingredients={data} />;
};

export default IngredientsPage;
