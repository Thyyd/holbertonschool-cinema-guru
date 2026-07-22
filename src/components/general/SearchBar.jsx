import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ title, setTitle }) {

  function handleInput(event) {
    setTitle(event.target.value);
  }

  return (
    <div className='search-bar'>
      <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
      <input type="search" className="search-input" value={title} onChange={handleInput} placeholder="Search Movies" />
    </div>
  )
}

export default SearchBar;
