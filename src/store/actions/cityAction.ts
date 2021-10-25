import {TDispatch} from "../store";
import axios from "axios";
import {setCity, setCityError, setCityLoader, TCityData} from "../slices/citySlice";

export const getCity = (cityName: string) => async (dispatch: TDispatch) => {
    dispatch(setCityLoader())
    try {
        const response = await axios.get<TCityData[]>(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=${cityName}`);
        const data = response.data;
        dispatch(setCity(data[0]))
    } catch (error: any) {
        const errorMessage = error.message;
        dispatch(setCityError(errorMessage))
    }
}