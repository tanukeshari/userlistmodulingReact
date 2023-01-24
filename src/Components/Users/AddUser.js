import React, { useState } from 'react';
     
     import Card  from '../UI/Card';
     import Button from '../UI/Button';
     import classes from './AddUser.module.css';
     import ErrorModel from '../UI/ErrorModel';

  const AddUser = (props) => {
       const [enteredUserName, setEnteredUsername]  = useState();
       const [enteredAge, setEnteredAge]= useState('');
       const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();


        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:"Invalid Input ",
                message:'please enter a valid name and age(non-empty values).'
            });
             return
        }
        if(+enteredAge < 1){
            setError({
                title:"Invalid Age",
                message:"please enter a valid age (>0)."
            });
            return
        }

    props.onAddUser(enteredUserName,enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
    }

    const usernameChangeHandler = (event) =>{
setEnteredUsername(event.target.value);
    };

    const AgeChangeHandler =(event ) =>{
        setEnteredAge(event.target.value);
    };

    const errorHandler = () =>{
        setError(null);
    };

    return(
       [
        error &&( 
        <ErrorModel 
        key ="error-model"
        title={error.title}
         message={error.message} 
         onConfirm ={errorHandler}
         />
    ),

        <Card key ="add-user-card" className={classes.input}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>

            <input  id="username"
             type="text" 
             value={enteredUserName}
              onChange={usernameChangeHandler}/>

            <label htmlFor="age">Age(year)</label>

            <input id="age" 
            type="number"
            value={enteredAge}
             onChange ={AgeChangeHandler} />
            <Button type ="Submit">Add User</Button>
        </form>
        </Card>,
       ]
    );
};

  export default AddUser;