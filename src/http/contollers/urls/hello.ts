import { FastifyReply, FastifyRequest } from 'fastify'

export async function hello(request: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send({ hello: 'world' })
}
