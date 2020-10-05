import React, { Component } from "react"

class RentingHandler extends Component {
  toggleRentedStatus = () => {
    this.props.state.btnFunc(this.props.movieId)
  }
  render() {
    return (
      <button
        className="toggle-rented"
        onClick={this.toggleRentedStatus}
    >{this.props.state.btnText}</button>
    )
  }
}

export default RentingHandler
