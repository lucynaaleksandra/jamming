import React from 'react'
import debounce from "lodash/debounce"
import './searchBar.scss'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.delayedSearch = debounce(query => this.props.onSearch(query), 750)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.onClickSearch = this.onClickSearch.bind(this)
    this.onClickReset = this.onClickReset.bind(this)
  }

  handleTermChange(event) {
    this.setState({
      "query": event.target.value,
    })
    this.delayedSearch(event.target.value)
  }

  onClickSearch() {
    this.props.onSearch(this.state.query)
  }

  onClickReset() {
    this.props.onReset(this.state.query)
  }

  render() {
    return (
      <div className="SearchBar">
        <input 
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange} /> 
        <a onClick={this.onClickSearch}>SEARCH</a> 
      </div> 
    )
  }
}
export default SearchBar