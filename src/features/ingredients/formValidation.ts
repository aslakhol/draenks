import * as z from "zod";

export type NewIngredientFormType = {
  ingredientName: string;
  description?: string;
};

export const newIngredientFormSchema = z.object({
  ingredientName: z.string().min(1, { message: "Name is required." }),
  description: z.string().optional(),
});
