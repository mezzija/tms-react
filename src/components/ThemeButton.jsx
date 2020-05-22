import React from 'react';
import {useDispatch,useSelector} from "react-redux";
//style
import useStyles from '../styles/components/ThemeButton'
//action
import {switchTheme} from "../actions";

const ThemeButton = ()=>{
    const classes = useStyles();
    const dispatch=useDispatch();
    const isLights = useSelector(state=>state.app.lightTheme);
    const handleClick =(event)=>{
        event.preventDefault()
        dispatch(switchTheme());
    }

     return(
        <>
            <a onClick={handleClick} href="#" className={classes.theme}>
                {
                    isLights
                        ? (
                            <svg viewBox="0 0 24 24" className={classes.icon}>
                                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path>
                            </svg>
                        )
                        : (
                            <svg viewBox="0 0 24 24" className={classes.icon}>
                                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
                            </svg>
                        )
                }

            </a>
        </>
    );

}
export default ThemeButton;