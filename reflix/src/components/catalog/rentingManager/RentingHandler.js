import React, { Component } from "react"

class RentingHandler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      btnFunc: this.props.movie.isRented
        ? this.props.toggleRentedStatus.unRentMovie
        : this.props.toggleRentedStatus.rentMovie,
      btnText: this.props.movie.isRented ? "-" : "+",
    }
  }
  updateStateAfterToggle = () => {
    const updatedState = { ...this.state }
    updatedState.btnFunc = this.props.movie.isRented
      ? this.props.toggleRentedStatus.unRentMovie
      : this.props.toggleRentedStatus.rentMovie
    updatedState.btnText = this.props.movie.isRented ? "-" : "+"
    this.setState(updatedState)
  }
  toggleRentedStatus = () => {
    this.state.btnFunc(this.props.movie.id)
    this.updateStateAfterToggle()
  }
  render() {
    return (
      <button className="toggle-rented" onClick={this.toggleRentedStatus}>
        {this.state.btnText}
      </button>
    )
  }
}

export default RentingHandler
