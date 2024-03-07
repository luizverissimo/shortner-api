import { PrismaAccessRepository } from '../../repositories/prisma/prisma-access-repository'
import { GetAccessMetricsUseCase } from '../get-access-metrics'

export function makeGetAccessMetricsUseCase() {
  const accessRepository = new PrismaAccessRepository()
  const useCase = new GetAccessMetricsUseCase(accessRepository)

  return useCase
}
