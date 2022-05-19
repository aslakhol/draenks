import * as trpc from "@trpc/server";
import { z } from "zod";

import { prisma } from "@/backend/utils/prisma";
import { newDrinkFormSchema } from "@/features/drinks/formValidation";
import { create } from "domain";

export const appRouter = trpc
  .router()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("world", {
    resolve() {
      return "woooooorld";
    },
  })
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

      const drinkInDb = await prisma.drinks.create({
        data: { ...drink, ingredients: { create: [...ingredients] } },
      });

      return { drink: drinkInDb };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

const bar = () => {};

function foo() {
  console.log();
}
