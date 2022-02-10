import React from 'react'

import CardIcon from "../Cart/CardIcon";
import classes from './HeaderCardButton.module.css'

const HeaderCardButton = (props) =>{
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CardIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
}

export default HeaderCardButton