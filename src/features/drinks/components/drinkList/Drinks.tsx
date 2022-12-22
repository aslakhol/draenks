import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";
import Drink from "./Drink";

const Drinks = () => {
  const { data: drinks } = trpc.useQuery(["drinks"]);

  if (!drinks) {
    return <Loading />;
  }

  return (
    <>
      {drinks.map((drink) => (
        <Drink key={drink.drinkId} drinkId={drink.drinkId} />
      ))}
    </>
  );
};

export default Drinks;
