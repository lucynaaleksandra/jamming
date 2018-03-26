import React from 'react'
import './searchBar.scss'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div> 
    )
  }
}
export default SearchBar;

//console.log('SearchBAR: Hello SEARCH BAR') 