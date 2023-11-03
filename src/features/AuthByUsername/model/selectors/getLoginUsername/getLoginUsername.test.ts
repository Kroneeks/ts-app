import { getLoginUsername } from './getLoginUsername'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getLoginError.test', () => {
  it('Should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: '',
        isLoading: false
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('username')
  })

  it('Empty field username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: false
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })

  it('Empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
