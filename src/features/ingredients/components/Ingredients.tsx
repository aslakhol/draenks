import IngredientList from "./ingredientList/IngredientList";
import NewIngredient from "./new/NewIngredient";

const Ingredients = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Ingredients</h1>
        </div>
        {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <NewIngredient />
        </div> */}
      </div>
      <IngredientList />
    </div>
  );
};

export default Ingredients;
