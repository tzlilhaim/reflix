import React, { Component } from "react"
import { IconButton } from "@material-ui/core"

class RentingHandler extends Component {
  toggleRentedStatus = () => {
    const btnFunc = this.props.movie.isRented
      ? this.props.toggleRentedStatus.unRentMovie
      : this.props.toggleRentedStatus.rentMovie
    btnFunc(this.props.movie.id)
  }
  render() {
    return (
      <IconButton
        aria-label="add"
        className="toggle-rented"
        onClick={this.toggleRentedStatus}
        disabled={this.props.disabled}
      >
        {this.props.movie.isRented ? "-" : "+"}
      </IconButton>
    )
  }
}

export default RentingHandler
