import { Access, Prisma } from '@prisma/client'
import { AccessRepository, MetricsResult } from '../access-repository'
import { randomUUID } from 'crypto'

export class InMemoryAccessRepository implements AccessRepository {
  public items: Access[] = []

  async create(data: Prisma.AccessUncheckedCreateInput): Promise<Access> {
    const access = {
      id: data.id ?? randomUUID(),
      url_id: data.url_id,
      created_at: new Date(),
    }

    this.items.push(access)

    return access
  }

  async countAccessByUrl(): Promise<MetricsResult[]> {
    throw new Error('Method not implemented.')
  }
}
