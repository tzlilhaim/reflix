import React, { Component } from "react"
import "../../../styles/budget.css"

class Budget extends Component {
  render() {
    return <h3 id="budget">Budget: {this.props.budget}$</h3>
  }
}

export default Budget
