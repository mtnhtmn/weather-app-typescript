import axios from "axios";
import {TDispatch} from "../store"
import {setWeather, setWeatherError, TWeatherData} from "../slices/weatherSlice";

export const getWeather = () => async (dispatch: TDispatch, getState: any) => {
    const cityData = getState().cityReducer.cityData
    let cityKey: string = '215854'
    if (cityData) {
        cityKey = cityData.Key
    }
    return axios.get<TWeatherData[]>(`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw`
    )
        .then(response => {
            const data = response.data
            dispatch(setWeather(data[0]))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(setWeatherError(errorMessage))
        })
}


