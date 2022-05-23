import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/backend/utils/prisma";
import { newDrinkFormSchema } from "@/features/drinks/formValidation";
import { upsertIngredientsForDrink } from "../utils/ingredientForDrink";

export const appRouter = trpc
  .router()
  .query("drinks", {
    resolve: () => {
      return prisma.drinks.findMany({ include: { ingredients: true } });
    },
  })
  .query("ingredients", {
    resolve: async () => {
      const ingredients = await prisma.ingredients.findMany();

      return ingredients.filter((ingredients) => !ingredients.deleted);
    },
  })
  .mutation("create-ingredient", {
    input: z.object({
      ingredientName: z.string(),
      description: z.string().optional(),
    }),
    resolve: async ({ input }) => {
      const ingredientInDb = await prisma.ingredients.create({
        data: { ...input },
      });

      return { ingredient: ingredientInDb };
    },
  })
  .mutation("create-drink", {
    input: newDrinkFormSchema,
    resolve: async ({ input }) => {
      const { ingredients, ...drink } = input;

      const ingredientsWithOutId = ingredients.map((i) => {
        const { ingredientForDrinkId, ...withoutId } = i;
        return withoutId;
      });

      const drinkInDb = await prisma.drinks.create({
        data: { ...drink, ingredients: { create: [...ingredientsWithOutId] } },
      });

      return { drink: drinkInDb };
    },
  })
  .mutation("edit-drink", {
    input: z.object({
      drinkId: z.number(),
      drink: newDrinkFormSchema,
    }),
    resolve: async ({ input }) => {
      const { drinkId, drink } = input;
      const { ingredients, ...drinkWithoutIngredients } = drink;

      await upsertIngredientsForDrink(drinkId, ingredients);

      const drinkInDb = await prisma.drinks.update({
        where: { drinkId: drinkId },
        data: {
          ...drinkWithoutIngredients,
        },
      });

      return { drink: drinkInDb };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
