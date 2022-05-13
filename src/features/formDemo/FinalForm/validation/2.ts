import * as z from "zod";

export type FinalFormType = {
  name: string;
  description?: string;
  age: number;
  petName: string;
  favouriteFood?: string;
};

export const finalFormSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character long."),
  description: z.string().optional(),
  age: z
    .number()
    .min(0, "Age must be a positive number.")
    .max(200, "No super olds allowed"),
  petName: z.string().min(1, "Pet name must be at least 1 character long."),
  favouriteFood: z
    .string()
    .optional()
    .refine(
      (data) => data === "bread",
      "Bread is nice, but it's no ones favourite food."
    ),
});
