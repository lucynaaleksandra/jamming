import React from 'react'

import './playlist.scss'
import TrackList from '../../components/TrackList/trackList'

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist"> 
        <input defaultValue={'New Playlist'} />
          <TrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
export default Playlist

//console.log('PLAYLIST: Hello PLAYLIST') 
