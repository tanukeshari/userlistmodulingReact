import React from 'react';
import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModel.module.css";


const ErrorModel =props =>{
    return(<div>
        <div className={classes.backdrop } onClick={props.onConfirm}>
            <Card className={classes.model}>
            <header className={classes.hearder}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
            <Button onClick={props.onClick}>okey</Button>
        </footer>
        </Card>
    </div>
   </div> 
   )
}
export default ErrorModel;
