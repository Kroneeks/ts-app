import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test', () => {
  it('One param', () => {
    const params = getQueryParams({
      test: 'value'
    })
    expect(params).toBe('?test=value')
  })
  it('Multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      second: '2'
    })
    expect(params).toBe('?test=value&second=2')
  })
  it('With undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined
    })
    expect(params).toBe('?test=value')
  })
})
