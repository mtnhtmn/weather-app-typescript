import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type TCityFav = {
    EnglishName:string;
    Key:string
}

export interface IFavState {
    fav: TCityFav[]
}

const initialState: IFavState = {
    fav : []
}

export const favSlice = createSlice({
    name: 'favSlice',
    initialState,
    reducers: {
        addToFav: (state, action: PayloadAction<TCityFav>) => {
            state.fav.push(action.payload)
        },
    },
})

export const {addToFav} = favSlice.actions

export default favSlice.reducer
