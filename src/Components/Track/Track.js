import './Track.css';

function Track(props) {
  const {track, isRemoval, addTrack, removeTrack} = props;

  const handleTrackAction = () => {
    return isRemoval ? removeTrack(track) : addTrack(track);
  }

  return(
    <div className="track">
      <div className="track-information">
        <h3>{track.name}</h3>
        <p>{track.artists} | {track.album}</p>
      </div>
      <button className="track-action" onClick={handleTrackAction}>{isRemoval ? '-' : '+'}</button>
    </div>
  )
}

export default Track;
