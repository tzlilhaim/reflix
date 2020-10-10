import React, { useState } from "react"
import "../../styles/user.css"

export default function User(props) {
  const [timeOfDay, setTimeOfDay] = useState(new Date().getHours())

  return (
    <h3 id="active-user">
      <span className="greeting">
        {timeOfDay > 4 && timeOfDay < 12
          ? "Good morning, "
          : timeOfDay < 17
          ? "Good afternoon, "
          : timeOfDay < 20
          ? "Good evening, "
          : "Good night, "}
      </span>
      {props.user.name}
    </h3>
  )
}
