import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type ReducersMapObject, type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState = {}, asyncReducers } = props

  // const navigate = useNavigate()
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema> /* navigate */)

  return (
      <Provider store={store}>{children}</Provider>
  )
}

export { StoreProvider }
