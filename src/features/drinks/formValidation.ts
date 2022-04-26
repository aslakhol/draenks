import { MeasuringUnit } from "@prisma/client";
import * as z from "zod";

export type NewDrinkFormType = z.infer<typeof newDrinkFormSchema>;

const newIngredientForDrinkFormSchema = z.object({
  drinkId: z.number(),
  ingredientId: z.number(),
  amount: z.number().min(0, "Amount must be greater than 0"),
  unit: z.nativeEnum(MeasuringUnit),
});

export const newDrinkFormSchema = z.object({
  drinkName: z.string().min(1, { message: "Name is required." }),
  description: z.string().optional(),
  instructions: z.string().optional(),
  variant: z.string().optional(),
  ingredients: z.array(newIngredientForDrinkFormSchema),
});
