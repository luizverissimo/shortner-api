import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateAccessUseCase } from '../../../use-cases/factories/make-create-access-use-case'
import { makeGetUrlFromAliasUseCase } from '../../../use-cases/factories/make-get-url-from-alias'

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const getUrlBodySchema = z.object({
    alias: z.string(),
  })
  const { alias } = getUrlBodySchema.parse(request.params)

  const getUlrFromAliasUseCase = makeGetUrlFromAliasUseCase()
  const { url } = await getUlrFromAliasUseCase.execute({
    alias,
  })

  const createAccessUseCase = makeCreateAccessUseCase()
  await createAccessUseCase.execute({
    urlId: url.id,
  })

  return reply.status(200).send({ url: url.origin })
}
