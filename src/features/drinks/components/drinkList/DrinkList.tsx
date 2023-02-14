import DrinkListHeading from "./DrinkListHeading";
import Drinks from "./Drinks";

const DrinkList = () => {
  return (
    <TailwindTableWrapper>
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
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:block"
            >
              <DrinkListHeading heading="Description" />
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Download</span>
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <Drinks />
        </tbody>
      </table>
    </TailwindTableWrapper>
  );
};

export default DrinkList;

type TailWindTableWrapperProps = {
  children: React.ReactNode;
};

const TailwindTableWrapper = (props: TailWindTableWrapperProps) => {
  const { children } = props;
  return (
    <>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
