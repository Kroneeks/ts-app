import { Country } from '@/entities/Country'
import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { Currency } from '@/entities/Currency'
import { ValidateProfileError } from '../../consts/consts'

const data = {
  username: 'user',
  first: 'first',
  lastname: 'lastname',
  age: 22,
  country: Country.Lithuania,
  currency: Currency.EUR,
  city: 'Vilnius',
  id: '1'
}

describe('updateProfileData.test', () => {
  it('Success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  it('Server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
    thunk.api.put.mockReturnValue(Promise.reject(new Error('Error')))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  it('Validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, first: '', lastname: '' } } })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA
    ])
  })
})
