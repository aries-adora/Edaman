import React, { useState } from 'react';
import Axios from 'axios';

function LoginBeta() {

  // ========= FOR PING-PONG 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userlist, setUserList] = useState([]); // FOR PING-PONG

  const addUser = () => {
    Axios.post('http://localhost:5000/add', { 
      username: username,
      password: password
    });
  };

  const deleteUser = () => {
    Axios.post('http://localhost:5000/add', { 
      username: username,
      password: password
    });
  };

  const updateUser = () => {
    Axios.post('http://localhost:5000/add', { 
      username: username,
      password: password
    });
  };

  const getUser = () => {
    Axios.get('http://localhost:5000/get').then((response) => {
      setUserList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="info">
        <label>Username: </label>
        <input type="text" onChange={(event) => {
          setUsername(event.target.value)
          }} 
        /> 
        <label>Password: </label>
        <input type="password" onChange={(event) => {
          setPassword(event.target.value)
          }} 
        />
        <button onClick={addUser}>SUBMIT</button>
      </div>

      <button onClick={getUser}>SUBMIT</button>
      <div>
        {userlist.map((val, key) => {
          return <div>{val.ID}</div>
        })}
      </div>

      <button onClick={deleteUser}>SUBMIT</button>
      <div>
        {userlist.map((val, key) => {
          return <div>{val.ID}</div>
        })}
      </div>
      <button onClick={updateUser}>SUBMIT</button>
      <div>
        {userlist.map((val, key) => {
          return <div>{val.ID}</div>
        })}
      </div>

    </div>
  );
}

export default LoginBeta;