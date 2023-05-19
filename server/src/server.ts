import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: true, // todas URLs de front end poderão acessar nosso back end
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 Server is running on port 3333')
  })
