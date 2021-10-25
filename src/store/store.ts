import {configureStore} from '@reduxjs/toolkit'
import cityReducer from "./slices/citySlice";
import forecastReducer from "./slices/forecastSlice";
import weatherReducer from "./slices/weatherSlice";
import favReducer from './slices/favSlice'

export const store = configureStore({
    reducer: {
        cityReducer,
        forecastReducer,
        weatherReducer,
        favReducer,
    },
})

export type TGetState = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch