import { Url } from '@prisma/client'
import { UrlsRepository } from '../repositories/urls-repository'

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
    const url = await this.urlsRepository.create({
      origin,
      alias,
    })

    return { url }
  }
}
