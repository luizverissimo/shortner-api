import {
  AccessRepository,
  MetricsResult,
} from '../repositories/access-repository'

interface GetAccessMetricsUseCaseResponse {
  results: MetricsResult[]
}

export class GetAccessMetricsUseCase {
  constructor(private accessRepository: AccessRepository) {}

  async execute(): Promise<GetAccessMetricsUseCaseResponse> {
    const results = await this.accessRepository.countAccessByUrl()

    return { results }
  }
}
