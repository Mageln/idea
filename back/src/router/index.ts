import { createIdeaTrpcRoute } from './createIdea'
import { getIdeaTrpcRoute } from './getIdea'
import { getIdeasTrpcRoute } from './getIdeas'
import { trpc } from '../lib/trpc'
import { signUpTrpcRoute } from './signUp'
import { signInTrpcRoute } from './signIn'

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  createIdea: createIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn:signInTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter
