import React, { Component } from "react"

class Budget extends Component {
  render() {
    return <div id="budget">Budget: {this.props.budget}$</div>
  }
}

export default Budget
