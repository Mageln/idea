import { createIdeaTrpcRoute } from './createIdea'
import { getIdeaTrpcRoute } from './getIdea'
import { getIdeasTrpcRoute } from './getIdeas'
import { trpc } from '../lib/trpc'
import { signUpTrpcRoute } from './signUp'
import { signInTrpcRoute } from './signIn'
import { getMeTrpcRoute } from './getMe'

export const trpcRouter = trpc.router({
  getIdea: getIdeaTrpcRoute,
  getIdeas: getIdeasTrpcRoute,
  createIdea: createIdeaTrpcRoute,
  signUp: signUpTrpcRoute,
  signIn:signInTrpcRoute,
  getMe: getMeTrpcRoute
})

export type TrpcRouter = typeof trpcRouter
