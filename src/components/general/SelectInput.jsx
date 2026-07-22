import './general.css';

function SelectInput({ label, options, className, value, setValue }) {

  function handleSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div className='select-container'>
      <label>{label}</label>
      <select className={`select-input ${className}`} onChange={handleSelect} value={value}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput;
