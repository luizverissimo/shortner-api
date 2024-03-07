import { FastifyInstance } from 'fastify'
import { create } from './create'
import { get } from './get'
import { metrics } from './metrics'

export async function urlsRoutes(app: FastifyInstance) {
  app.post('/urls', create)
  app.get('/:alias', get)
  app.get('/metrics', metrics)
}
