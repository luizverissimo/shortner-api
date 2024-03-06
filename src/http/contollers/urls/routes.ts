import { FastifyInstance } from 'fastify'
import { hello } from './hello'

export async function urlsRoutes(app: FastifyInstance) {
  app.get('/hello', hello)
}
