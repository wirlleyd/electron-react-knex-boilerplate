import React, { useState } from 'react';
import {ipcRenderer} from 'electron'
import { Container } from './styles';

function Home() {
    const [user, setUser] = useState({
        username: '',
        password: '',
      });
    
      const handleState = (event) => {
        const {target: {value, name}} = event;
        setUser((oldValues) => ({ ...oldValues, [name]: value }));
      }
    
      const onFinish = () => console.log(ipcRenderer.sendSync("user:create", user));

  return (
      <Container>
        <input type="text" name="username" placeholder="Username" onChange={(e) => handleState(e)}/>
        <input type="password" name="password" placeholder="Username" onChange={(e) => handleState(e)}/>
        <button onClick={() => onFinish()}>Save</button>
      </Container>
  );
}

export default Home;