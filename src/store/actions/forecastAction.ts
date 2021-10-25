import {TDispatch, TGetState} from "../store"
import axios from "axios";
import {setForecast, setForecastError, TForecastData} from '../slices/forecastSlice'

export const getForecast = () => {
    return (dispatch : TDispatch ,getState : TGetState) => {

        const cityData = getState.cityReducer.cityData
        if(cityData){
            axios.get<TForecastData>(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityData.Key}?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw`
            )
                .then(response => {
                    const data = response.data
                    dispatch(setForecast(data))
                })
                .catch(error => {
                    const errorMessage = error.message
                    dispatch(setForecastError(errorMessage))
                })
        }

    }
}


