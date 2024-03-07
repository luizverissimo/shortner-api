import { Access } from '@prisma/client'
import { AccessRepository } from '../repositories/access-repository'

interface CreateAccessUseCaseRequest {
  urlId: string
}

interface CreateUrlAliasUseCaseResponse {
  access: Access
}

export class CreateAccessUseCase {
  constructor(private accessRepository: AccessRepository) {}
  async execute({
    urlId,
  }: CreateAccessUseCaseRequest): Promise<CreateUrlAliasUseCaseResponse> {
    const access = await this.accessRepository.create({
      url_id: urlId,
    })

    return { access }
  }
}
