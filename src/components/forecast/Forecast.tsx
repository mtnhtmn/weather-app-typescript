import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {TForecastData} from "../../store/slices/forecastSlice";

interface IProps {
    forecastData:TForecastData,
}

const Forecast = ({forecastData}:IProps) => {
    return (
        <Grid container spacing={3} justifyContent='center'>
            {forecastData.DailyForecasts.map((item) => {
                return (
                    <Grid key={item.Date} item xs={12} sm={12} md={3} lg={2}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {new Date(item.Date).toLocaleDateString('en',{weekday:'short'})}
                                </Typography>
                                <Typography variant="body2">
                                    Min: {item.Temperature.Minimum.Value}{item.Temperature.Minimum.Unit}
                                </Typography>
                                <Typography variant="body2">
                                    Max: {item.Temperature.Maximum.Value}{item.Temperature.Maximum.Unit}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default Forecast;