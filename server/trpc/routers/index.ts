import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      const now = new Date();

      return {
        greeting: `hello ${
          input?.text ?? "world"
        }, current time is ${now.toISOString()}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
