import { z } from "zod";

export const zodIngredient = z.object({
  ingredientId: z.number(),
  ingredientName: z.string(),
  deleted: z.boolean(),
  description: z.string(),
});

export const zodIngredients = z.array(zodIngredient);

export const zodIngredientForDrink = z.object({
  ingredientForDrinkId: z.number(),
  amount: z.number(),
  unit: z.string(),
  ingredient: z.object({
    ingredientName: z.string(),
    ingredientId: z.number(),
  }),
});

export const zodDrink = z.object({
  drinkId: z.number(),
  drinkName: z.string(),
  description: z.string(),
  instructions: z.string(),
  variant: z.string(),
  deleted: z.boolean(),
  ingredients: z.array(zodIngredientForDrink),
});

export const zodDrinks = z.array(zodDrink);
