import React from 'react';
import throttle from 'lodash/throttle';
import {Autocomplete,InputAdornment, TextField} from "@mui/material";
import { Search as SearchIcon} from '@mui/icons-material'
import axios from "axios";
import {useHistory} from "react-router-dom";


export default function AutocompleteCity() {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);

    const history = useHistory()
    const fetch = React.useMemo(
        () =>
            throttle((inputValue, callback) => {
                axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=${inputValue}`).then((response) => {
                    callback(response.data)
                })
            }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch(inputValue, (data) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (data) {
                    newOptions = [...newOptions, ...data];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <Autocomplete
            id="autocomplete-city"
            size='small'
            sx={{width: 300}}
            getOptionLabel={(option) => typeof option === 'string' ? option : option.LocalizedName}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                if(newValue){
                    history.push(`/home?cityName=${newValue.LocalizedName}`)
                }

            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} placeholder='search' InputProps={{
                    ...params.InputProps,
                    startAdornment: <InputAdornment position='start'><SearchIcon/></InputAdornment>
                }} fullWidth/>
            )}
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.Key}>
                        {option.LocalizedName}
                    </li>
                );
            }}
        />
    );
}
//
// <Autocomplete options={[{name:'eran',label:'eran!@#'},{name:'matan',label:'matan!@#'}]}   getOptionLabel={(user) => user.label}/>
//
// <Autocomplete options={[{name:'eran',label:'eran!@#'},{name:'matan',label:'matan!@#'}]}   getOptionLabel={(user) => user.name}/>
//
// const Autocomplete = (props)=>{
//     return (
//         props.optios.map((user)=>{
//             return <div>{props.getOptionLabel(user)}</div>
//         })
//     )
// }
//
