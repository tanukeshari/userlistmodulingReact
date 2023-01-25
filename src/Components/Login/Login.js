import React, { useState ,useEffect ,useReducer, useContext } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';
// import AuthContext from '../store/auth-context';

const emailReducer = (state,action) => {
  if (action.type === 'USER_INPUT') {
    return {value : action.val ,isValid : action.val.includes('@') };

  }
  if (action.type === 'INPUT_BLUR'){
    return {value:state.value , isValid : state.value.includes('@')}
  }

};

const passwordReducer = (state,action) => {
  if (action.type === 'USER_INPUT') {
    return {value : action.val ,isValid : action.val.trim().length>6 };

  }
  if (action.type === 'INPUT_BLUR'){
    return {value:state.value , isValid : state.value.trim().length>6}
  }

};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredCollegeName,setEnteredCollegeName] = useState('');
  const [collegeNameIsValid,setCollegeNameIsValid] = useState(false);

  // useEffect(() => {
  //   setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6 &&
  //     enteredCollegeName.trim().length > 6
  //      );
  // },[enteredCollegeName,enteredEmail,enteredPassword]);
  const [emailState , dispatchEmail ] = useReducer(emailReducer ,
    {value:'' , isValid: null });

  const [passwordState ,dispatchPassword] = useReducer(passwordReducer,
    {value:'' , isValid: null});

  const { isValid : emailIsValid } = emailState;
  const { isValid :passwordIsValid } = passwordState; 

  // const authCtx = useContext(AuthContext);

  useEffect(( )=> {
    const identifier= setTimeout(() =>{
      console.log('checking form validity')
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500);
    return () =>{
      console.log('cleanup');
      clearTimeout(identifier);
    };
  }, [emailIsValid,passwordIsValid]);  

  

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:'USER_INPUT' , val : event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:'USER_INPUT' , val : event.target.value});

    // setFormIsValid(
    //   passwordState.value.trim().length > 6 && emailState.isValid &&enteredCollegeName.trim().length>6
    // );
  };

  const collegeNameChangeHandler = (event) => {
    setEnteredCollegeName(event.target.value);

    // setFormIsValid(
    //   event.target.value.trim().length > 6  && emailState.value.includes('@') && passwordState.value.trim().length >6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'  })
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'})
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollegeNameHandler = () => {
    setCollegeNameIsValid(enteredCollegeName.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // authCtx.onLogin(emailState.value, passwordState.value,enteredCollegeName);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeNameIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collegeName">College Name</label>
          <input
            type="collegeName"
            id="collegeName"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;