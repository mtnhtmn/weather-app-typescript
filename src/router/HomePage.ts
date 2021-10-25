import React from 'react';
import City from "../components/city/City";
import {Container, Grid} from "@mui/material";
import {useLocation} from "react-router-dom";
import queryString  from 'query-string'

const HomePage = () => {

    const location = useLocation()
    const query = queryString.parse(location.search);
    return (
        <Container>
            <Grid container justifyContent={'center'}>
                <Grid item xs={12} md={8}>
                    <City cityName={query.cityName}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
