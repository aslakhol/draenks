import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "@/backend/utils/prisma";
import { newDrinkFormSchema } from "@/features/drinks/formValidation";
import { upsertIngredientsForDrink } from "../utils/ingredientForDrink";
import { newIngredientFormSchema } from "@/features/ingredients/formValidation";

export const appRouter = trpc
  .router()
  .query("drink", {
    input: z.object({ drinkId: z.number() }),
    resolve: async ({ input }) => {
      const drink = await prisma.drinks.findFirst({
        where: { drinkId: input.drinkId },
        include: {
          ingredients: {
            select: {
              ingredientForDrinkId: true,
              amount: true,
              unit: true,
              ingredient: {
                select: { ingredientName: true, ingredientId: true },
              },
            },
          },
        },
      });

      return drink;
    },
  })
  .query("drinks", {
    resolve: () => {
      return prisma.drinks.findMany({
        include: {
          ingredients: {
            select: {
              ingredientForDrinkId: true,
              ingredient: {
                select: { ingredientName: true, ingredientId: true },
              },
            },
          },
        },
      });
    },
  })
  .query("ingredients", {
    resolve: async () => {
      const ingredients = await prisma.ingredients.findMany();

      return ingredients.filter((ingredients) => !ingredients.deleted);
    },
  })
  .mutation("create-ingredient", {
    input: newIngredientFormSchema,
    resolve: async ({ input }) => {
      const ingredientInDb = await prisma.ingredients.create({
        data: { ...input },
      });

      return { ingredient: ingredientInDb };
    },
  })
  .mutation("edit-ingredient", {
    input: z.object({
      ingredientId: z.number(),
      ingredient: newIngredientFormSchema,
    }),
    resolve: async ({ input }) => {
      const { ingredientId, ingredient } = input;

      const drinkInDb = await prisma.ingredients.update({
        where: { ingredientId: ingredientId },
        data: {
          ...ingredient,
        },
      });

      return { drink: drinkInDb };
    },
  })
  .mutation("delete-ingredient", {
    input: z.object({ ingredientId: z.number() }),
    resolve: async ({ input }) => {
      const { ingredientId } = input;

      await prisma.ingredients.delete({
        where: { ingredientId: ingredientId },
      });
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
  })
  .mutation("delete-drink", {
    input: z.object({ drinkId: z.number() }),
    resolve: async ({ input }) => {
      const { drinkId } = input;

      await prisma.drinks.delete({ where: { drinkId: drinkId } });
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
