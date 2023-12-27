import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getProfileReadonly', () => {
  it('Should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }

    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  it('Should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    }

    expect(getProfileReadonly(state as StateSchema)).toEqual(false)
  })

  it('Should return empty variable', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
