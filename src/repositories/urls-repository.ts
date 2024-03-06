import { Prisma } from '@prisma/client'

export interface UrlsRepository {
  create(data: Prisma.URLCreateInput): Promise<URL>
}
