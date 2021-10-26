import React from 'react';
import {NavLink} from "react-router-dom";
import AutocompleteCity from "../city/AutocompleteCity";
import {alpha, AppBar, Link, Theme, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme:Theme) => {
    return {
        root: {
            flexGrow: 1,
        },
        toolbar: {
            height: 64
        },
        links: {
            display: 'flex',
            gap: 10
        },
        link: {
            color: theme.palette.common.white
        },
        linkActive: {
            textDecoration: 'underline'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,

        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: theme.spacing(1),


        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }
});

const Appbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar} variant={'regular'}>
                <Typography className={classes.title} variant="h6" noWrap>
                    Weather App
                </Typography>
                <div className={classes.links}>

                    <Link sx={{color: 'white'}} activeStyle={{textDecoration: 'underline'}} component={NavLink}
                          to='/home'>
                        Home
                    </Link>
                    <Link sx={{color: 'white'}} activeStyle={{textDecoration: 'underline'}} component={NavLink}
                          to='/favorites'>
                        Favorites
                    </Link>
                </div>
                <div className={classes.search}>
                    <AutocompleteCity/>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar
