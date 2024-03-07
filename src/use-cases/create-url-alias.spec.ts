import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUrlsRepository } from '../repositories/in-memory/in-memory-urls-repository'
import { CreateUrlUseCase } from './create-url-alias'

let urlsRepository: InMemoryUrlsRepository
let sut: CreateUrlUseCase

describe('Create Url UseCase', () => {
  beforeEach(() => {
    urlsRepository = new InMemoryUrlsRepository()
    sut = new CreateUrlUseCase(urlsRepository)
  })
  it('should be able to create a url', async () => {
    const { url } = await sut.execute({
      alias: 'a',
      origin: 'http://google.com',
    })

    expect(url).toEqual(
      expect.objectContaining({ alias: 'a', origin: 'http://google.com' }),
    )
  })
})
