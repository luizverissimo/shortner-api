import { Url } from '@prisma/client'
import { UrlsRepository } from '../repositories/urls-repository'
import { AliasIsNotFoundError } from './errors/alias-is-not-found'

interface getUrlFromAliasUseCaseRequest {
  alias: string
}

interface getUrlFromAliasUseCaseResponse {
  url: Url
}

export class GetUrlFromAliasUseCase {
  constructor(private urlsRepository: UrlsRepository) {}

  async execute({
    alias,
  }: getUrlFromAliasUseCaseRequest): Promise<getUrlFromAliasUseCaseResponse> {
    const url = await this.urlsRepository.findByAlias(alias)

    if (!url) {
      throw new AliasIsNotFoundError()
    }

    return { url }
  }
}
