import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateUrlUseCase } from '../../../use-cases/factories/make-create-url-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createUrlBodySchema = z.object({
    origin: z.string(),
    alias: z.string(),
  })
  const { origin, alias } = createUrlBodySchema.parse(request.body)

  const createUrlUseCase = makeCreateUrlUseCase()
  await createUrlUseCase.execute({
    origin,
    alias,
  })

  return reply.status(201).send()
}
