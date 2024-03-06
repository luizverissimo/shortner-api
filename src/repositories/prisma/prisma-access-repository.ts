import { Access, Prisma } from '@prisma/client'
import { prisma } from '../../../prisma/lib/prisma'
import { AccessRepository } from '../access-repository'

export class PrismaAccessRepository implements AccessRepository {
  async create(data: Prisma.AccessUncheckedCreateInput): Promise<Access> {
    const access = await prisma.access.create({ data })

    return access
  }
}
