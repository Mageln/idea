import cors from 'cors'
import express from 'express'
import { type AppContext, createAppContext } from '../src/lib/ctx'
import { applyTrpcToExpressApp } from '../src/lib/trpc'
import { trpcRouter } from './router'
import { applyPassportToExpressApp } from './lib/passport'
import { env } from './lib/env'

void (async () => {
  let ctx: AppContext | null = null
  try {
    ctx = createAppContext()
    const expressApp = express()
    expressApp.use(cors())
    expressApp.get('/ping', (req, res) => {
      res.send('pong')
    })
    applyPassportToExpressApp(expressApp, ctx)
    applyTrpcToExpressApp(expressApp, ctx, trpcRouter)
    expressApp.listen(env.PORT, () => {
      console.info(`Listening at http://localhost:${env.PORT}`)
    })
  } catch (error) {
    console.error(error)
    await ctx?.stop()
  }
})()