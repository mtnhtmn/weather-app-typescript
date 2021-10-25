import React from 'react';
import {connect} from "react-redux";
import {getCity} from "../store/actions/cityAction";
import {getWeather} from "../store/actions/weatherAction";
import {getForecast} from "../store/actions/forecastAction";
import CityCardFav from "../components/city/CityCardFav";
import {Grid} from "@mui/material";

const FavoritePage = ({fav}) => {
    return (
        <Grid container spacing={3}>
            {fav.map((city)=>{
                return(
                    <Grid key={city.Key} item xs={4}>
                        <CityCardFav cityName={city.EnglishName} temperature={city.temperature} weatherText={city.weatherText}/>
                    </Grid>
                )
            })}
        </Grid>
    );
};


const mapStateToProps = state => {
    return {
        fav: state.favReducer.fav,
    }
}
export default connect(mapStateToProps, {getCity, getWeather, getForecast})(FavoritePage);


