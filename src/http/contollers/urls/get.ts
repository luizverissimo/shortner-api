import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeGetUrlFromAliasUseCase } from '../../../use-cases/factories/make-get-url-from-alias'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const getUrlBodySchema = z.object({
    alias: z.string(),
  })
  const { alias } = getUrlBodySchema.parse(request.params)

  const createUrlUseCase = makeGetUrlFromAliasUseCase()
  const { url } = await createUrlUseCase.execute({
    alias,
  })

  return reply.status(200).send({ url: url.origin })
}
