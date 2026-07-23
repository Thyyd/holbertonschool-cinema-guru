import './auth.css';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

function Register({ username, password, setUsername, setPassword }) {
  return(
    <div className="register">
      <h2 className='auth-title'>Create a new account</h2>
      <Input
        label='Username'
        type='text'
        className='input-auth'
        value={username}
        setValue={setUsername}
        icon={faUser}
        inputAttributes={{ required: true, maxLength: 20 }}
      />
      <Input
        label='Password'
        type='password'
        className='input-auth'
        value={password}
        setValue={setPassword}
        icon={faKey}
        inputAttributes={{ required: true, minLength: 8 }}
      />

      <Button
        label='Sign Up'
        className='auth-submit button-auth'
        icon={faKey}
      />
    </div>
  )
}

export default Register;
