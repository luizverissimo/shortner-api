import { Prisma } from '@prisma/client'
import { UrlsRepository } from '../urls-repository'
import { prisma } from '../../../prisma/lib/prisma'

export class PrismaUrlRepository implements UrlsRepository {
  async create(data: Prisma.URLCreateInput): Promise<URL> {
    const url = await prisma.uRL.create({ data })

    return url
  }
}
