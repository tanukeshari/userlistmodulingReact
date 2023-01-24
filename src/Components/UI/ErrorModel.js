import React from 'react';
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModel.module.css";
import ReactDOM from 'react-dom';

const Backdrop =(props)=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
};

const ModelOverlay =(props) =>{
return(
    <Card className={classes.model}>
            <header className={classes.hearder}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
            <Button onClick={props.onConfirm}>okey</Button>
        </footer>
        </Card>


)
}

const ErrorModel =props =>{
    return(
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm ={props.onConfirm} />, document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
        <ModelOverlay 
          title ={props.title}
          message= {props.message}
          onConfirm={props.onConfirm}
        />,
     document.getElementById('overlay-root')
        )}
        </React.Fragment> 
   );
};
export default ErrorModel;
