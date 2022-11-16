import './SearchBar.css';
import magnifyingGlass from '../../assets/magnifying_glass_icon.png'

function SearchBar(props) {
  const {searchTerm, setSearchTerm, onSearch} = props;

  const handleTermChange = (e) => {
    setSearchTerm(e.target.value);
  }

  // Submits search if the enter key is pressed
  const handleKeyPress = (e) => {
    if(e.charCode === 13) handleSubmitSearch();  
  }
  
  const handleSubmitSearch = () => {
    onSearch(searchTerm);
  }

  return(
    <div className="searchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} onKeyPress={handleKeyPress}/>
      <img className="search-icon" alt="magnifying glass icon" onClick={handleSubmitSearch} src={magnifyingGlass}></img>
    </div>
  )
} 

export default SearchBar;