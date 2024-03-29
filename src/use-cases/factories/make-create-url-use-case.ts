import { PrismaUrlRepository } from '../../repositories/prisma/prisma-url-repository'
import { CreateUrlUseCase } from '../create-url-alias'

export function makeCreateUrlUseCase() {
  const urlsRepository = new PrismaUrlRepository()
  const useCase = new CreateUrlUseCase(urlsRepository)

  return useCase
}
