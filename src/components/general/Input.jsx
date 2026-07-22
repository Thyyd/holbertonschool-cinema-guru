import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ label, type, className, value, setValue, icon, inputAttributes }) {

  function handleInput(event) {
    setValue(event.target.value);
  }

  return (
    <div className={`input-container ${className}`}>
      <div className="label-container">
        {icon && <FontAwesomeIcon icon={ icon } />}
        <label>{label}</label>
      </div>
      <input {...inputAttributes} type={type} className={`input`} value={value} onChange={handleInput} />
    </div>
  )
}

export default Input;
