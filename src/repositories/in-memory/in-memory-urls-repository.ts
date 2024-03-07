import { Prisma, Url } from '@prisma/client'
import { UrlsRepository } from '../urls-repository'
import { randomUUID } from 'crypto'

export class InMemoryUrlsRepository implements UrlsRepository {
  public items: Url[] = []

  async create(data: Prisma.UrlCreateInput): Promise<Url> {
    const url = {
      id: data.id ?? randomUUID(),
      origin: data.origin,
      alias: data.alias,
      created_at: new Date(),
    }

    this.items.push(url)

    return url
  }

  async findByAlias(alias: string): Promise<Url | null> {
    const url = this.items.find((item) => item.alias === alias)
    if (!url) return null
    return url
  }
}
