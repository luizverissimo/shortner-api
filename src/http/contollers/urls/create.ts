import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateUrlUseCase } from '../../../use-cases/factories/make-create-url-use-case'
import { AliasAlreadyExistsError } from '../../../use-cases/errors/alias-already-exists'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createUrlBodySchema = z.object({
    origin: z.string(),
    alias: z.string(),
  })
  const { origin, alias } = createUrlBodySchema.parse(request.body)
  try {
    const createUrlUseCase = makeCreateUrlUseCase()
    await createUrlUseCase.execute({
      origin,
      alias,
    })
  } catch (err) {
    if (err instanceof AliasAlreadyExistsError) {
      return reply.status(409).send({ message: err.message })
    }

    throw err // passing responsibility to fastify
  }
  return reply.status(201).send()
}
