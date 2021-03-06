import React from 'react'
import PropTypes from 'prop-types'
import debounce from "lodash/debounce"
import './searchBar.scss'

class SearchBar extends React.Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.delayedSearch = debounce(query => this.props.onSearch(query), 750)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.onClickSearch = this.onClickSearch.bind(this)
  }

  handleTermChange(event) {
    // this.setState({
    //   "query": event.target.value,
    // })
    this.props.onChange(event.target.value)
    this.delayedSearch(event.target.value)
  }

  onClickSearch() {
    this.props.onSearch(this.props.query)
  }

  render() {
    return (
      <div className="SearchBar">
        <input 
          value={this.props.query}
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange} /> 
        <a onClick={this.onClickSearch}>SEARCH</a> 
      </div> 
    )
  }
}
export default SearchBar