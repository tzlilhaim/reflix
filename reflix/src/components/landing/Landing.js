import React from "react"
import User from "./User"
import "../../styles/landing.css"

export default function Landing(props) {
  if (!props.isActiveTab) {
    props.setActiveTab("home")
  }
  return (
    <div id="home">
      <h2>Who's watching?</h2>
      <div id="users">
        {props.users.map((user, index) => {
          return (
            <User
              user={user}
              key={`u-${index}`}
              setActiveUser={props.setActiveUser}
            />
          )
        })}
      </div>
    </div>
  )
}
