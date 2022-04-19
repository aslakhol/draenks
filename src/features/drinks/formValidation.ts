import * as z from "zod";

export type NewDrinkFormType = {
  drinkName: string;
  description?: string;
  instructions?: string;
  variant?: string;
};

export const newDrinkFormSchema = z.object({
  drinkName: z.string().min(1, { message: "Name is required." }),
  description: z.string().optional(),
  instructions: z.string().optional(),
  variant: z.string().optional(),
});
