import { trpc } from "@/utils/trpc";
import Link from "next/link";
import EditDrink from "../edit/EditDrink";

type Props = {
  drinkId: number;
};

const Drink = (props: Props) => {
  const { drinkId } = props;
  const { data: drink } = trpc.useQuery(["drink", { drinkId: drinkId }]);

  if (!drink) {
    return <></>;
  }

  const drinkLink = `drinks/${drink.drinkId}`;
  console.log(drinkLink);

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 ">
        <Link href={drinkLink}>
          <p className="hover:underline cursor-pointer">{drink.drinkName}</p>
        </Link>
        {drink.variant && (
          <span className="italic text-gray-500 text-sm">{drink.variant}</span>
        )}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate max-w-xl hidden md:block">
        {drink.description}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <EditDrink drinkId={drink.drinkId} />
      </td>
    </tr>
  );
};

export default Drink;
