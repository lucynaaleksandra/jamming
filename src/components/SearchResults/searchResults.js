import React from 'react'
import './searchResults.scss'
import TrackList from '../../components/TrackList/trackList'

class SearchResults extends React.Component {

  resetResults() {
    
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd} />
      </div>
    )
  }
}
export default SearchResults