import * as trpc from "@trpc/server";
import { date, z } from "zod";

import { prisma } from "@/backend/utils/prisma";

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
      return prisma.drink.findMany();
    },
  })
  .mutation("create-drink", {
    input: z.object({
      name: z.string(),
    }),
    // resolve: async ({ input }) => {
    //   const drinkInDb = await prisma.drink.create({ data: { ...input } });

    //   return {
    //     success: true,
    //     drink: drinkInDb,
    //   };
    // },
    async resolve({ input }) {
      const drinkInDb = await prisma.drink.create({ data: { ...input } });

      return {
        success: true,
      };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

const bar = () => {};

function foo() {
  console.log();
}
