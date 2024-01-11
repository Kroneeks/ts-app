import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { type DeepPartial } from '@reduxjs/toolkit'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('getProfileData', () => {
  it('Should return data object', () => {
    const data = {
      username: 'user',
      first: 'first',
      lastname: 'lastname',
      age: 22,
      country: Country.Lithuania,
      currency: Currency.EUR,
      city: 'Vilnius'
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  it('Should return empty data object', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
