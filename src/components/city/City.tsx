import React from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import CityCard from "./CityCard";
import {TDispatch, TGetState} from "../../store/store";
import {getCity} from "../../store/actions/cityAction";
import {addToFavAction} from "../../store/actions/favAction";
import {getWeather} from "../../store/actions/weatherAction";
import {getForecast} from "../../store/actions/forecastAction";

interface IProps {
    cityName: string
}

const City = ({cityName = 'tel-aviv'}: IProps) => {

    const dispatch = useDispatch<TDispatch>()
    const useStore: TypedUseSelectorHook<TGetState> = useSelector
    const cityData = useStore(store => store.cityReducer.cityData)
    const weatherData = useStore(store => store.weatherReducer.weatherData)
    const forecastData = useStore(store => store.forecastReducer.forecastData)
    const fav = useStore(store => store.favReducer.fav)
    const loadData = React.useCallback(async () => {
        await dispatch(getCity(cityName))
        dispatch(getWeather() as any)
        await dispatch(getForecast)
    }, [cityName, dispatch])

    React.useEffect(() => {
        loadData()
    }, [loadData, cityName])

    if (cityData && weatherData) {
        return (


            <CityCard isInFav={!!fav.find(item => item.Key === cityData.Key)} addToFavAction={addToFavAction}
                      cityData={cityData}
                      weatherData={weatherData}
                      forecastData={forecastData}/>

        );
    }
    return null


};

export default City