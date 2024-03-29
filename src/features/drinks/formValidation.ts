import * as z from "zod";
import { measurementUnits } from "../../backend/utils/zod";

export type NewDrinkFormType = z.infer<typeof newDrinkFormSchema>;
export type NewIngredientForDrinkFormType = z.infer<
  typeof newIngredientForDrinkFormSchema
>;

export const newIngredientForDrinkFormSchema = z.object({
  ingredientForDrinkId: z.number().nullable(),
  ingredientId: z.number(),
  amount: z.number().min(0, "Amount must be greater than 0"),
  unit: measurementUnits,
});

export const newDrinkFormSchema = z.object({
  drinkName: z.string().min(1, { message: "Name is required." }),
  description: z.string().nullable(),
  instructions: z.string().nullable(),
  variant: z.string().nullable(),
  ingredients: z.array(newIngredientForDrinkFormSchema),
});
