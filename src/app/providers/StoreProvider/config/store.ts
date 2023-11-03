import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { useDispatch } from "react-redux";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

// !!! Change after all
// Make hooks for redux and add middleware
export type AppState = ReturnType<typeof createReduxStore>
export type AppDispatch = AppState['dispatch'] 
export const useAppDispatch = () => useDispatch<AppDispatch>()