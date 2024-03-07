import { FastifyRequest, FastifyReply } from 'fastify'
import { makeGetAccessMetricsUseCase } from '../../../use-cases/factories/make-get-access-metrics-use-case'

export async function metrics(request: FastifyRequest, reply: FastifyReply) {
  const getAccessMetricsUseCase = makeGetAccessMetricsUseCase()
  const { results } = await getAccessMetricsUseCase.execute()

  return reply.status(200).send({ results })
}
