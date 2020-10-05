import React, { Component } from "react"

class User extends Component {
  render() {
    return (
      <div className="user" data-id={this.props.id} data-color={this.props.color}>
        <span className="username">{this.props.name}</span>
      </div>
    )
  }
}

export default User
