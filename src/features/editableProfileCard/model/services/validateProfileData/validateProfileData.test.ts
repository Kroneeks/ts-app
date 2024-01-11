import { Country } from '@/entities/Country'
import { validateProfileData } from './validateProfileData'
import { Currency } from '@/entities/Currency'
import { ValidateProfileError } from '../../consts/consts'

const data = {
  username: 'user',
  first: 'first',
  lastname: 'lastname',
  age: 22,
  country: Country.Lithuania,
  currency: Currency.EUR,
  city: 'Vilnius'
}

describe('validateProfileData.test', () => {
  it('Success', () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  it('Without first or lastname', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })

  it('With too huge age', () => {
    const result = validateProfileData({ ...data, age: 1000 })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ])
  })

  it('With negative age', () => {
    const result = validateProfileData({ ...data, age: -1 })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ])
  })

  it('Without age', () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE
    ])
  })

  it('Without country', () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })

  it('Incorrect all', () => {
    const result = validateProfileData({ })

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ])
  })
})
