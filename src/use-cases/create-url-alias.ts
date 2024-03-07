import { Url } from '@prisma/client'
import { UrlsRepository } from '../repositories/urls-repository'
import { AliasAlreadyExistsError } from './errors/alias-already-exists'

interface CreateUrlAliasUseCaseRequest {
  origin: string
  alias: string
}

interface CreateUrlAliasUseCaseResponse {
  url: Url
}

export class CreateUrlUseCase {
  constructor(private urlsRepository: UrlsRepository) {}
  async execute({
    origin,
    alias,
  }: CreateUrlAliasUseCaseRequest): Promise<CreateUrlAliasUseCaseResponse> {
    const urlWithSameAlias = await this.urlsRepository.findByAlias(alias)

    if (urlWithSameAlias) {
      throw new AliasAlreadyExistsError()
    }

    const url = await this.urlsRepository.create({
      origin,
      alias,
    })

    return { url }
  }
}
