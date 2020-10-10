import React, { Component } from "react"
import User from "./User"
import "../../styles/landing.css"

class Landing extends Component {
  componentDidMount() {
    if (!this.props.isActiveTab) {
      this.props.setActiveTab("home")
    }
  }
  render() {
    return (
      <div id="home">
        <h2>Who's watching?</h2>
        <div id="users">
          {this.props.users.map((user, index) => {
            return (
              <User
                id={user.id}
                key={`u-${index}`}
                name={user.name}
                color={user.color}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Landing
