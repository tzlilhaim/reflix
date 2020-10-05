import React, { Component } from "react"
import User from "./User"

class Landing extends Component {
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
                color={user.color.name}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Landing
