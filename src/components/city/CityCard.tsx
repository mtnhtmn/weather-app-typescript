import React from 'react';
import Forecast from "../forecast/Forecast";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Star as StarIcon} from '@mui/icons-material'
import {TCityData} from "../../store/slices/citySlice";
import {TForecastData} from "../../store/slices/forecastSlice";
import {TWeatherData} from "../../store/slices/weatherSlice";
import {TDispatch} from "../../store/store";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },
    forecastContainer: {
        display: 'flex',
        gap: 10
    }
});

interface IProps {
    cityData: TCityData
    forecastData: TForecastData
    weatherData: TWeatherData
    addToFavAction: any
    isInFav: boolean
}

const CityCard = ({cityData, weatherData, forecastData, addToFavAction, isInFav}: IProps) => {
    const classes = useStyles();
    const dispatch = useDispatch<TDispatch>()
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cityData.EnglishName}: {weatherData.Temperature.Metric.Value}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {cityData.Country?.EnglishName}
                </Typography>
                <Forecast forecastData={forecastData}/>
            </CardContent>
            <CardActions>
                <Button onClick={() => dispatch(addToFavAction(cityData))}>
                    Add to fav
                </Button>
                {isInFav && <StarIcon/>}
            </CardActions>
        </Card>
    );
}

export default CityCard


