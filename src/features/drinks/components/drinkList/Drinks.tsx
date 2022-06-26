import Loading from "@/components/Loading";
import { trpc } from "@/utils/trpc";
import EditDrink from "../edit/EditDrink";

const Drinks = () => {
  const { data: drinks } = trpc.useQuery(["drinks"]);

  if (!drinks) {
    return <Loading />;
  }

  return (
    <>
      {drinks.map((drink) => (
        <tr key={drink.drinkId}>
          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {drink.drinkName}
            {drink.variant && (
              <span className="italic text-gray-500 text-sm">
                {" "}
                - {drink.variant}
              </span>
            )}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate max-w-xl">
            {drink.description}
          </td>
          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <EditDrink drinkId={drink.drinkId} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Drinks;
