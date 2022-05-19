import { MeasuringUnit } from "@prisma/client";
import type { Drinks } from "@prisma/client";
import * as z from "zod";
import NewDrinkForm from "./components/NewDrinkForm";

export type NewDrinkFormType = z.infer<typeof newDrinkFormSchema>;
export type NewIngredientForDrinkFormType = z.infer<
  typeof newIngredientForDrinkFormSchema
>;

const newIngredientForDrinkFormSchema = z.object({
  ingredientId: z.number(),
  amount: z.number().min(0, "Amount must be greater than 0"),
  unit: z.nativeEnum(MeasuringUnit),
});

export const newDrinkFormSchema = z.object({
  drinkName: z.string().min(1, { message: "Name is required." }),
  description: z.string().nullable(),
  instructions: z.string().nullable(),
  variant: z.string().nullable(),
  ingredients: z.array(newIngredientForDrinkFormSchema),
});
