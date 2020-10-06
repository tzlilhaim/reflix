import React, { Component } from "react"
import { Link } from "react-router-dom"

class User extends Component {
  render() {
    return (
      <Link to={`/catalog`}>
        <div
          className="user"
          data-id={this.props.id}
          data-color={this.props.color}
        >
          <span className="username">{this.props.name}</span>
        </div>
      </Link>
    )
  }
}

export default User
