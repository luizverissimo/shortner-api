import { PrismaUrlRepository } from '../../repositories/prisma/prisma-url-repository'
import { GetUrlFromAliasUseCase } from '../get-url-from-alias'

export function makeGetUrlFromAliasUseCase() {
  const urlsRepository = new PrismaUrlRepository()
  const useCase = new GetUrlFromAliasUseCase(urlsRepository)

  return useCase
}
