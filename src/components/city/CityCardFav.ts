import React from 'react';
import {Card , CardContent, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useHistory} from "react-router-dom";

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

const CityCardFav = ({cityName,temperature,weatherText}) => {
    const classes = useStyles();
    const history = useHistory()
    return (
        <Card onClick={()=>   history.push(`/home?cityName=${cityName}`)} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {cityName}: {temperature}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {weatherText}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CityCardFav


