import { Bark } from '../src/senders'

/**
 * Dummy test
 */
describe('Bark test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Bark is instantiable', () => {
    expect(new Bark('2323xx')).toBeInstanceOf(Bark)
  })
})
