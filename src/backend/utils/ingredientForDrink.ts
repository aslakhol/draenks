import { NewIngredientForDrinkFormType } from "@/features/drinks/formValidation";
import { prisma } from "@/backend/utils/prisma";

export const upsertIngredientsForDrink = async (
  drinkId: number,
  ingredientsForDrink: NewIngredientForDrinkFormType[]
) => {
  for (const i of ingredientsForDrink) {
    if (i.ingredientForDrinkId === null) {
      await insertIngredientForDrink(i, drinkId);
    } else {
      await updateIngredientForDrink(i, drinkId);
    }
  }
};

const updateIngredientForDrink = async (
  ingredientForDrink: NewIngredientForDrinkFormType,
  drinkId: number
) => {
  const { ingredientForDrinkId, ...ingredientForDrinkWithoutId } =
    ingredientForDrink;
  const id = ingredientForDrinkId as number;

  const ingredientForDrinkInDb = await prisma.ingredientForDrink.update({
    where: { ingredientForDrinkId: id },
    data: { ...ingredientForDrinkWithoutId, drinkId: drinkId },
  });
  return ingredientForDrinkInDb;
};

const insertIngredientForDrink = async (
  ingredientForDrink: NewIngredientForDrinkFormType,
  drinkId: number
) => {
  const { ingredientForDrinkId, ...ingredientForDrinkWithoutId } =
    ingredientForDrink;

  const ingredientForDrinkInDb = await prisma.ingredientForDrink.create({
    data: { ...ingredientForDrinkWithoutId, drinkId: drinkId },
  });
  return ingredientForDrinkInDb;
};
