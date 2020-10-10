import React from "react"
import { Link } from "react-router-dom"

export default function User(props) {
  const logIntoUser = () => {
    props.setActiveUser(props.user)
    localStorage.setItem("userId", props.user.id)
  }
  return (
    <Link to={`/catalog`}>
      <div
        className="user"
        data-id={props.user.id}
        data-color={props.user.color}
        onClick={logIntoUser}
      >
        <span className="username">{props.user.name}</span>
      </div>
    </Link>
  )
}
