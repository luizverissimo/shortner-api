import { Prisma, Url } from '@prisma/client'

export interface UrlsRepository {
  create(data: Prisma.UrlCreateInput): Promise<Url>
  findByAlias(alias: string): Promise<Url | null>
}
