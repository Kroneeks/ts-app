import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { type ReactNode, type FC, useEffect } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  children: ReactNode
  removeAfterUnmount?: boolean
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useAppDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers()
    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      const mounted = mountedReducers[reducerName as StateSchemaKey]
      if (!mounted) {
        store.reducerManager.add(reducerName as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${reducerName} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
          store.reducerManager.remove(reducerName as StateSchemaKey)
          dispatch({ type: `@DESTROY ${reducerName} reducer` })
        })
      }
    }
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])

  return (
      <>
          {children}
      </>

  )
}

export { DynamicModuleLoader }
