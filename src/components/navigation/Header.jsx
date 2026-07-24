import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Header({ userUsername, setIsLoggedIn }) {
  function logout() {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  }

  return (
    <nav className='navbar'>
      <div className="title-container">
        <p className="title">Cinema Guru</p>
      </div>
      <div className="user-container">
        <img src="https://picsum.photos/100/100" alt="user_avatar" className='user-avatar' />
        <p className="welcome-message">Welcome, {userUsername}!</p>
        <span className="logout" onClick={logout}>
          <FontAwesomeIcon className='logout-icon' icon={ faRightFromBracket } />
          Logout
        </span>
      </div>
    </nav>
  );
}

export default Header;
