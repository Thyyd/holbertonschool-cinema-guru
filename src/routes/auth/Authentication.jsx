import './auth.css';
import { useState } from 'react';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitchState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(
    <div className="auth-page">
      <form className='authentication' onSubmit={(event) => event.preventDefault()}>
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
