import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type DeepPartial } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState = {} } = props

  const navigate = useNavigate()

  const store = createReduxStore(initialState as StateSchema, navigate)

  return (
      <Provider store={store}>{children}</Provider>
  )
}

export { StoreProvider }
