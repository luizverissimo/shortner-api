import { expect, describe, it, beforeEach } from 'vitest'
import { CreateAccessUseCase } from './create-access'
import { InMemoryAccessRepository } from '../repositories/in-memory/in-memory-access-repository'
import { InMemoryUrlsRepository } from '../repositories/in-memory/in-memory-urls-repository'

let accessRepository: InMemoryAccessRepository
let urlsRepository: InMemoryUrlsRepository
let sut: CreateAccessUseCase

describe('Create Access UseCase', () => {
  beforeEach(() => {
    accessRepository = new InMemoryAccessRepository()
    urlsRepository = new InMemoryUrlsRepository()
    sut = new CreateAccessUseCase(accessRepository)
  })
  it('should be able to create a access', async () => {
    urlsRepository.items.push({
      id: 'url-01',
      alias: 'a',
      origin: 'http://google.com',
      created_at: new Date(),
    })

    const { access } = await sut.execute({ urlId: 'url-01' })

    expect(access.id).toEqual(expect.any(String))
  })
})
