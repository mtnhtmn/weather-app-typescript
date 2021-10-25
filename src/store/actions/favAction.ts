import {TCityData} from "../slices/citySlice";
import {TDispatch, TGetState} from "../store";
import {addToFav, TCityFav} from "../slices/favSlice";

export const addToFavAction = (cityData: TCityData) => async (dispatch: TDispatch, getState: TGetState) => {
    const cityFav: TCityFav = {
        EnglishName: cityData.EnglishName,
        Key: cityData.Key,
    }
    const fav = getState.favReducer.fav
    if (!fav.find(item => item.Key === cityFav.Key)) {
        localStorage.setItem('fav', JSON.stringify([...fav, cityFav]))
        dispatch(addToFav(cityFav))
    }
}


