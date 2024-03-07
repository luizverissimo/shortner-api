import Fastify from 'fastify'
import { urlsRoutes } from './http/contollers/urls/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = Fastify()
app.register(urlsRoutes)
app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation Error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO here should log to an external tool like Kibana/new Relic
  }

  return reply.status(500).send({ message: 'Internal Server Error' })
})
