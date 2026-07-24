import './auth.css';
import { useState } from 'react';
import axios from 'axios';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const route = _switch ? 'login' : 'register';
    axios
      .post(`http://localhost:8000/api/auth/${route}`,
      {
        username,
        password
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        setUserUsername(username);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return(
    <div className="auth-page">
      <form className='authentication' onSubmit={handleSubmit}>
        <div className="switch">
          <Button
            label='Sign In'
            className={`button-auth ${_switch ? 'selected' : ''}`}
            onClick={() => setSwitchState(true)}
            type='button'
          />
          <Button
            label='Sign Up'
            className={`button-auth ${!_switch ? 'selected' : ''}`}
            onClick={() => setSwitchState(false)}
            type='button'
          />
        </div>

        <div className="auth-form">
          {_switch ?
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />:
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        </div>
      </form>
    </div>
  )

}

export default Authentication;
