import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

import SearchBar from '../../components/SearchBar/searchBar'
import SearchResults from '../../components/SearchResults/searchResults'
import Playlist from '../../components/Playlist/playlist'

class App extends React.Component {
    render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}
export default App

//console.log('APP: Hello APP') 
