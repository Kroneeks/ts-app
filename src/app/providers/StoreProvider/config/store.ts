import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { uiReducer } from "@/features/UI";
import { rtkApi } from "@/shared/api/rtkApi";

export function createReduxStore(
        initialState?: StateSchema,
        asyncReducers?: ReducersMapObject<StateSchema>
        /* navigate?: (to: To, options?: NavigateOptions) => void, */
    ) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    }

    const extraArg: ThunkExtraArg = {
        api: $api,
        /* navigate */
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
        }).concat(rtkApi.middleware)
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

// !!! Change after all
// Make hooks for redux and add middleware
export type AppState = ReturnType<typeof createReduxStore>
export type AppDispatch = AppState['dispatch'] 