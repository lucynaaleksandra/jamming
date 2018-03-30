import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

import SearchBar from '../../components/SearchBar/searchBar'
import SearchResults from '../../components/SearchResults/searchResults'
import Playlist from '../../components/Playlist/playlist'
import Spotify from '../../util/spotify.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  // calls the Spotify.js (util file) to run a call for Spotify API, then sets state
  search(term) {
    Spotify.search(term)
      .then(response =>
        this.setState({ searchResults: response })
      )
  }

  // Adds track from Search Results to Playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks
    tracks.push(track)
    this.setState({ playlistTracks: track })
  }

  // Removes track from Playlist (filter out track id from playlistTracks)
  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks.filter(current => current.id !== track.id)
    this.setState({ playlistTracks: tracks })
  }

  // updates the name of the Playlist
  updatePlaylistName(name) {
    this.setState({ playlistName: input })
  }

  // saves Playlist name and tracks to user's account
  savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri)
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
              onAdd={this.addTracks} />
            <Playlist
              playlistName={this.state.playlistName}
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.onNameChange}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}
export default App

//console.log('APP: Hello APP') 
