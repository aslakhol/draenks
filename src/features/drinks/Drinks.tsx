import DrinkList from "./components/drinkList/DrinkList";
import NewDrink from "./components/new/NewDrink";

const Drinks = () => {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Drinks</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all drinks currently in Drænks.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <NewDrink />
          </div>
        </div>
        <DrinkList />
      </div>
    </>
  );
};

export default Drinks;
