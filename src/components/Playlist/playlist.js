import React from 'react'

import './playlist.scss'
import TrackList from '../../components/TrackList/trackList'

class Playlist extends React.Component {
  constructor(props) {
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
  }

  // updates Playlist name to value user input
  handleNameChange(event) {
    this.props.onNameChange(event.target.value) 
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} /> 
        <TrackList
          onRemove={this.props.onRemove}
          tracks={this.props.tracks} />
        <a className="Playlist-save"
          onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
export default Playlist