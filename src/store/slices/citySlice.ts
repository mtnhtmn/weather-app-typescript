import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TCityData = { Key: string, EnglishName: string, Country: { EnglishName: string } }

export interface ICityState {
    loading: boolean,
    cityData: TCityData | null,
    error: string
}

const initialState: ICityState = {
    loading: false,
    cityData: null,
    error: '',
}

export const citySlice = createSlice({
    name: 'citySlice',
    initialState,
    reducers: {
        setCityLoader: (state) => {
            state.loading = true
        },
        setCityError: (state, action:PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        },
        setCity: (state, action: PayloadAction<TCityData>) => {
            state.cityData = action.payload
            state.loading = false
        },
    },
})

export const {setCity, setCityLoader, setCityError} = citySlice.actions

export default citySlice.reducer
