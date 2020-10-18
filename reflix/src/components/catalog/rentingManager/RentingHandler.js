import React, {useState, useEffect } from "react"
import { IconButton } from "@material-ui/core"

export default function RentingHandler(props) {
  const [btn, setBtn] = useState({ toggleFunc: null, text: "" })

  useEffect(() => {
    setBtn({
      toggleFunc: props.movie.isRented
        ? props.toggleRentedStatus.unRentMovie
        : props.toggleRentedStatus.rentMovie,
      text: props.movie.isRented ? "-" : "+",
    })
  }, [props])

  const toggleRentedStatus = () => {
    btn.toggleFunc(props.movie.id)
  }
  return (
    <IconButton
      aria-label="add"
      className="toggle-rented"
      onClick={toggleRentedStatus}
      disabled={props.disabled}
    >
      {btn.text}
    </IconButton>
  )
}
/* 
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
 */
