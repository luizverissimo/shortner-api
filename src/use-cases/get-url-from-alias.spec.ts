import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUrlsRepository } from '../repositories/in-memory/in-memory-urls-repository'
import { GetUrlFromAliasUseCase } from './get-url-from-alias'
import { AliasIsNotFoundError } from './errors/alias-is-not-found'

let urlsRepository: InMemoryUrlsRepository
let sut: GetUrlFromAliasUseCase

describe('Get Url UseCase', () => {
  beforeEach(() => {
    urlsRepository = new InMemoryUrlsRepository()
    sut = new GetUrlFromAliasUseCase(urlsRepository)
  })
  it('should be able to get a url from an alias', async () => {
    await urlsRepository.create({ alias: 'a', origin: 'http://google.com' })
    const { url } = await sut.execute({
      alias: 'a',
    })

    expect(url).toEqual(
      expect.objectContaining({ origin: 'http://google.com' }),
    )
  })

  it('should not be able to get a url inexistent', async () => {
    expect(async () => {
      await sut.execute({
        alias: 'a',
      })
    }).rejects.toBeInstanceOf(AliasIsNotFoundError)
  })
})
