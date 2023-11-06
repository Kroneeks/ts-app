import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(
        initialState?: StateSchema,
        navigate?: (to: To, options?: NavigateOptions) => void
    ) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
            
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

// !!! Change after all
// Make hooks for redux and add middleware
export type AppState = ReturnType<typeof createReduxStore>
export type AppDispatch = AppState['dispatch'] 