import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TWeatherData = {Temperature:{Imperial:{Unit:string,Value:Number},Metric:{Unit:string,Value:Number}},WeatherText: string}

export interface IWeatherState {
    weatherData: TWeatherData | null,
    error: string
}

const initialState: IWeatherState = {
    weatherData: null,
    error: '',
}

export const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        setWeatherError: (state, action:PayloadAction<string>) => {
            state.error = action.payload
        },
        setWeather: (state, action: PayloadAction<TWeatherData>) => {
            state.weatherData = action.payload
        },
    },
})

export const {setWeather, setWeatherError, } = weatherSlice.actions

export default weatherSlice.reducer
