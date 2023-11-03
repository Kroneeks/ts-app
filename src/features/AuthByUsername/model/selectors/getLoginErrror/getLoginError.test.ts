import { getLoginError } from './getLoginError'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getLoginError.test', () => {
  it('Should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: false,
        error: 'error'
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  it('Empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
