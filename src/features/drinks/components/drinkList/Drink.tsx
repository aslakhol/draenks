import { trpc } from "@/utils/trpc";
import { Drinks, MeasuringUnit } from "@prisma/client";
import Link from "next/link";
import EditDrink from "../edit/EditDrink";
import { zodDrink } from "../../../../backend/utils/zod";
import { z } from "zod";

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

  const downloadUrl = prepareJson(drink);
  const downloadName = `${drink.drinkName}${
    drink.variant ? "-" + drink.variant : ""
  }.json`
    .toLocaleLowerCase()
    .replaceAll(" ", "-");

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 ">
        <Link href={drinkLink} passHref>
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
        <a href={downloadUrl} download={downloadName}>
          download
        </a>
      </td>
      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <EditDrink drinkId={drink.drinkId} />
      </td> */}
    </tr>
  );
};

export default Drink;

type InputDrink = z.infer<typeof zodDrink>;

const prepareJson = (drink: InputDrink) => {
  const json = JSON.stringify(drink);
  const blob = new Blob([json], { type: "application/json" });
  const href = URL.createObjectURL(blob);

  return href;
};
