import Drink from "@/features/drink/Drink";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const DrinkPage: NextPage = () => {
  const { drinkId } = useRouter().query;

  if (!drinkId || !Number(drinkId)) {
    return <></>;
  }

  return <Drink drinkId={Number(drinkId)} />;
};

export default DrinkPage;
