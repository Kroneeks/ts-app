import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { type DeepPartial } from '@reduxjs/toolkit'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

describe('getProfileValidateErrors', () => {
  it('Should return empty array', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: []
      }
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([])
  })

  it('Should return empty with one error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.INCORRECT_AGE]
      }
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  it('Should return empty with all errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.INCORRECT_COUNTRY,
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.NO_DATA,
          ValidateProfileError.SERVER_ERROR
        ]
      }
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR
    ])
  })

  it('Should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
