import { Access, Prisma } from '@prisma/client'
import { prisma } from '../../../prisma/lib/prisma'
import { AccessRepository, MetricsResult } from '../access-repository'

export class PrismaAccessRepository implements AccessRepository {
  async countAccessByUrl(): Promise<MetricsResult[]> {
    // I have to do the raw sql because prisma don't support
    // select a data from other table on join
    // https://github.com/prisma/prisma/issues/16243#issue-1445823500
    // and I hate to cast the value because count in query raw
    // return a strange bigInt
    // https://github.com/prisma/prisma/issues/14613
    const results = await prisma.$queryRaw<MetricsResult[]>`
     SELECT alias, cast(count(*) as integer) as accessCount from access
    INNER JOIN urls
      on access.url_id = urls.id
      group by alias 
      order by  accessCount desc
      limit 10
    `
    console.log(results)

    return results
  }

  async create(data: Prisma.AccessUncheckedCreateInput): Promise<Access> {
    const access = await prisma.access.create({ data })

    return access
  }
}
