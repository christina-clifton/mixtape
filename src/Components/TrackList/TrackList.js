import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {

    const {tracklist, isRemoval, addTrack, removeTrack} = props;

    return(
        <div className="trackList">
            {tracklist.map((track) => {
                return (
                    <div key={track.id}>
                        <Track 
                            track={track}
                            isRemoval={isRemoval}
                            addTrack={addTrack}
                            removeTrack={removeTrack}
                        />
                    </div>
                )}
            )}
        </div>
    )
}

export default TrackList;
