import { PrismaAccessRepository } from '../../repositories/prisma/prisma-access-repository'
import { CreateAccessUseCase } from '../create-access'

export function makeCreateAccessUseCase() {
  const accessRepository = new PrismaAccessRepository()
  const useCase = new CreateAccessUseCase(accessRepository)

  return useCase
}
