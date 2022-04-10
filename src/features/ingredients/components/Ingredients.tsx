import type { Ingredients as IngredientsType } from "@prisma/client";

type IngredientsProps = { ingredients: IngredientsType[] };

const Ingredients: React.FC<IngredientsProps> = (props) => {
  const { ingredients } = props;

  console.log(ingredients);

  return <>Ingredients foo</>;
};

export default Ingredients;
