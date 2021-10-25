import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";


type TProps = {children:React.ReactNode}

const Theme = ({children}:TProps) => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    );
};

export default Theme;



