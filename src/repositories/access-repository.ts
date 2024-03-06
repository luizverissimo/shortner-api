import { Access, Prisma } from '@prisma/client'

export interface AccessRepository {
  create(data: Prisma.AccessUncheckedCreateInput): Promise<Access>
}
