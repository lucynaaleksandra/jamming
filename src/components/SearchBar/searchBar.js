import React from 'react'
import './searchBar.scss'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.search = this.search.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  // sets the argument for the search method in app.js to the state of term 
  search() {
    this.props.onSearch(this.state.searchTerm)
  }

  handleTermChange(event) {
    this.props.onSearch(event.target.value)
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange} />
        <a>SEARCH</a>
      </div> 
    )
  }
}
export default SearchBar;

//console.log('SearchBAR: Hello SEARCH BAR') 