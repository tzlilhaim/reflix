import React, { Component } from "react"

class RentingHandler extends Component {
  toggleRentedStatus = () => {
    const btnFunc = this.props.movie.isRented
      ? this.props.toggleRentedStatus.unRentMovie
      : this.props.toggleRentedStatus.rentMovie
    btnFunc(this.props.movie.id)
  }
  render() {
    return (
      <button
        className="toggle-rented"
        onClick={this.toggleRentedStatus}
        disabled={this.props.disabled}
      >
        {this.props.movie.isRented ? "-" : "+"}
      </button>
    )
  }
}

export default RentingHandler
