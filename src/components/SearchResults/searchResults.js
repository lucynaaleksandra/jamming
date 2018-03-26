import React from 'react'
import './searchResults.scss'
import TrackList from '../../components/TrackList/trackList'

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList />
      </div>
    )
  }
}
export default SearchResults

//console.log('SearchRESULTS: Hello SEARCH RESULTS')
