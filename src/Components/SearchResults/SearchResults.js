import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

function SearchResults(props) {
  const {searchResults, addTrack} = props;

  return (
    <div className="searchResults">
      <h2>Results</h2>
        <TrackList 
          tracklist={searchResults}
          isRemoval={false}
          addTrack={addTrack}
        />
    </div>
  )
}

export default SearchResults;
