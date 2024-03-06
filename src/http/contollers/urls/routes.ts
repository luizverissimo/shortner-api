import { FastifyInstance } from 'fastify'
import { create } from './create'
import { get } from './get'

export async function urlsRoutes(app: FastifyInstance) {
  app.post('/urls', create)
  app.get('/:alias', get)
}
