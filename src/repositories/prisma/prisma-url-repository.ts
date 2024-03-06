import { Prisma, Url } from '@prisma/client'
import { UrlsRepository } from '../urls-repository'
import { prisma } from '../../../prisma/lib/prisma'

export class PrismaUrlRepository implements UrlsRepository {
  async findByAlias(alias: string): Promise<Url | null> {
    const url = await prisma.url.findFirst({ where: { alias } })

    return url
  }

  async create(data: Prisma.UrlCreateInput): Promise<Url> {
    const url = await prisma.url.create({ data })

    return url
  }
}
