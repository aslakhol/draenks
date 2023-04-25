import { z } from "zod";

export const measurementUnits = z.enum([
  "ML",
  "OZ",
  "PC",
  "DROP",
  "DASH",
  "WASH",
  "BARSPOON",
  "PART",
]);

export type MeasurementUnit = z.infer<typeof measurementUnits>;

export const zodIngredient = z.object({
  ingredientId: z.number(),
  ingredientName: z.string(),
  deleted: z.boolean(),
  description: z.string(),
});

export type Ingredient = z.infer<typeof zodIngredient>;

export const zodIngredients = z.array(zodIngredient);

export type Ingredients = z.infer<typeof zodIngredients>;

export const zodIngredientForDrink = z.object({
  ingredientForDrinkId: z.number(),
  amount: z.number(),
  unit: measurementUnits,
  ingredient: z.object({
    ingredientName: z.string(),
    ingredientId: z.number(),
  }),
});

export type IngredientForDrink = z.infer<typeof zodIngredientForDrink>;

export const zodDrink = z.object({
  drinkId: z.number(),
  drinkName: z.string(),
  description: z.string(),
  instructions: z.string(),
  variant: z.string(),
  deleted: z.boolean(),
  ingredients: z.array(zodIngredientForDrink),
});

export type Drink = z.infer<typeof zodDrink>;

export const zodDrinks = z.array(zodDrink);

export type Drinks = z.infer<typeof zodDrinks>;
