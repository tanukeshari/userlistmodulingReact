import React, {useState , Fragment} from 'react';

import AddUser from './Components/Users/AddUser';
 import UsersList from './Components/Users/UsersList';
 
 function App() {
 const [userList, setUserList] = useState([]);
 
 const  addUserHandler =(userName, userAge) =>{

  setUserList((prevUserList) =>[...prevUserList,{name:userName, age:userAge, id: Math.random().toString()}])
 } 


  return (
    <Fragment>
   <AddUser onAddUser={addUserHandler}/>
   <UsersList users ={userList} />
    </Fragment>
  );
};
export default App;
