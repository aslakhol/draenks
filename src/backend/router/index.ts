import * as trpc from "@trpc/server";
import { z } from "zod";
import { newDrinkFormSchema } from "@/features/drinks/formValidation";
import { newIngredientFormSchema } from "@/features/ingredients/formValidation";
import path from "path";
import { promises as fs } from "fs";
import { zodDrinks, zodIngredients } from "../utils/zod";

export const appRouter = trpc
  .router()
  .query("drink", {
    input: z.object({ drinkId: z.number() }),
    resolve: async ({ input }) => {
      const fp = path.join(process.cwd(), "data", "drinks.json");
      const drinks = await fs
        .readFile(fp, "utf8")
        .then((result) => JSON.parse(result))
        .then((result) => zodDrinks.parse(result));

      const drink = drinks.find((d) => d.drinkId === input.drinkId);

      return drink;
    },
  })
  .query("drinkForEdit", {
    input: z.object({ drinkId: z.number() }),
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  })
  .query("drinks", {
    resolve: async () => {
      const fp = path.join(process.cwd(), "data", "drinks.json");
      const drinks = await fs
        .readFile(fp, "utf8")
        .then((result) => JSON.parse(result))
        .then((result) => zodDrinks.parse(result));

      return drinks;
    },
  })
  .query("ingredient", {
    input: z.object({ ingredientId: z.number() }),
    resolve: async ({ input }) => {
      const fp = path.join(process.cwd(), "data", "ingredients.json");
      const ingredients = await fs
        .readFile(fp, "utf8")
        .then((result) => JSON.parse(result))
        .then((result) => zodIngredients.parse(result));

      const ingredient = ingredients.find(
        (i) => i.ingredientId === input.ingredientId
      );

      return ingredient;
    },
  })
  .query("ingredients", {
    resolve: async () => {
      const fp = path.join(process.cwd(), "data", "ingredients.json");
      const ingredients = await fs
        .readFile(fp, "utf8")
        .then((result) => JSON.parse(result))
        .then((result) => zodIngredients.parse(result));

      return ingredients;
    },
  })
  .mutation("create-ingredient", {
    input: newIngredientFormSchema,
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  })
  .mutation("edit-ingredient", {
    input: z.object({
      ingredientId: z.number(),
      ingredient: newIngredientFormSchema,
    }),
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  })
  .mutation("delete-ingredient", {
    input: z.object({ ingredientId: z.number() }),
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  })
  .mutation("create-drink", {
    input: newDrinkFormSchema,
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  })
  .mutation("edit-drink", {
    input: z.object({
      drinkId: z.number(),
      drink: newDrinkFormSchema,
    }),
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  })
  .mutation("delete-drink", {
    input: z.object({ drinkId: z.number() }),
    resolve: async ({ input }) => {
      throw new Error("Not implemented");
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
