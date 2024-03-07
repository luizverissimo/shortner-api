import { Access, Prisma } from '@prisma/client'

export interface MetricsResult {
  alias: string
  count: bigint
}

export interface AccessRepository {
  create(data: Prisma.AccessUncheckedCreateInput): Promise<Access>
  countAccessByUrl(): Promise<MetricsResult[]>
}
