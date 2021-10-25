import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TForecastData = {
    DailyForecasts:{Date : string, Temperature : {Minimum : {Value : number, Unit : string}, Maximum : {Value : number, Unit : string}}}[]
}

export interface IForecastState {
    forecastData : TForecastData,
    error: string
}

const initialState: IForecastState = {
    forecastData: {
        DailyForecasts:[]
    },
    error: '',
}

export const forecastSlice = createSlice({
    name: 'forecastSlice',
    initialState,
    reducers: {
        setForecastError: (state, action:PayloadAction<string>) => {
            state.error = action.payload
        },
        setForecast: (state, action: PayloadAction<TForecastData>) => {
            state.forecastData.DailyForecasts = action.payload.DailyForecasts
        },
    },
})

export const {setForecast, setForecastError} = forecastSlice.actions

export default forecastSlice.reducer
