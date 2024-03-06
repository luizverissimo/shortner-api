import { UrlsRepository } from '../repositories/urls-repository'

interface createURLUseCase {
  long: string
  short: string
}

export class CreateUrlUseCase {
  constructor(private urlsRepository: UrlsRepository) {}
}
