import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getProfileError', () => {
  it('Should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error'
      }
    }

    expect(getProfileError(state as StateSchema)).toEqual('Error')
  })

  it('Should return empty value', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
