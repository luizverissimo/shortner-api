import Fastify from 'fastify'
import { urlsRoutes } from './http/contollers/urls/routes'
import { ZodError } from 'zod'

export const app = Fastify({ logger: true })
app.register(urlsRoutes)
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation Error', issues: error.format() })
  }
  return reply.status(500).send({ message: 'Internal Server Error' })
})
