import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ label, className, onClick, icon }) {

  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon className='button-icon' icon={ icon } />}
      {label}
    </button>
  )
}

export default Button;
