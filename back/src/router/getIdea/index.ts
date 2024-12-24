import { z } from 'zod'
import { ideas } from '../../lib/ideas'
import { trpc } from '../../lib/trpc'

export const getIdeaTrpcRoute = trpc.procedure
  .input(
    z.object({
      idea: z.string(),
    })
  )
  .query(({ input,ctx }) => {
    const idea = ctx.prisma.idea.findUnique({
      where:{
        nick: input.idea
      }
    })
    return {idea}
  })
