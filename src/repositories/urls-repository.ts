import { Prisma, Url } from '@prisma/client'

export interface UrlsRepository {
  create(data: Prisma.UrlCreateInput): Promise<Url>
  findByAlias(q: string): Promise<Url | null>
}
