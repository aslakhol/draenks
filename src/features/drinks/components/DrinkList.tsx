import { trpc } from "@/utils/trpc";
import { ChevronDownIcon } from "@heroicons/react/solid";
import type { Drinks } from "@prisma/client";

const DrinkList = () => {
  const { data: drinks } = trpc.useQuery(["drinks"]);

  if (!drinks) {
    return <>Loading...</>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Drinks</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all drinks currently in Drænks.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <NewDrinkButton />
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="pl-4 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      <DrinkListHeading heading="Name" />
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <DrinkListHeading heading="Title" />
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <DrinkListHeading heading="Email" />
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      <DrinkListHeading heading="Role" />
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {drinks.map((drink) => (
                    <tr key={drink.drinkId}>
                      <DrinkListElement drink={drink} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkList;

const NewDrinkButton = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
    >
      Add drink
    </button>
  );
};

type DrinkListHeadingProps = {
  heading: string;
};

const DrinkListHeading = (props: DrinkListHeadingProps) => {
  const { heading } = props;

  return (
    <a href="#" className="group inline-flex">
      {heading}
      <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </span>
    </a>
  );
};

type DrinkListElementProps = { drink: Drinks };

const DrinkListElement = (props: DrinkListElementProps) => {
  const { drink } = props;

  return (
    <>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.drinkName}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {drink.drinkName}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit<span className="sr-only">, {drink.drinkName}</span>
        </a>
      </td>
    </>
  );
};
