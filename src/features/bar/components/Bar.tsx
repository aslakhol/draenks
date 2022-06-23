import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";

const Bar = () => {
  const { data: drinks, isSuccess } = trpc.useQuery(["drinks"]);

  if (!isSuccess) {
    return <Loading />;
  }

  return (
    <div className="p-8">
      <h1 className="bold pb-4">Cocktails on the menu</h1>
      {drinks.map((drink) => (
        <>{drink.drinkName}</>
      ))}
    </div>
  );
};

export default Bar;
