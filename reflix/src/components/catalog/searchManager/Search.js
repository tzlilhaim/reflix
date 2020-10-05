import React, { Component } from "react"

class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
    }
  }
  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    this.setState({ search: value }, () => {
      this.props.handleSearch(this.state.search)
    })
  }
  render() {
    return (
      <input
        id="search"
        placeholder="Search"
        onChange={this.handleInputChange}
      ></input>
    )
  }
}

export default Search
