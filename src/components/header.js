import React from "react"

export default function Header(props) {
  return <h1 style={{ margin: `30px auto`, maxWidth: 600 }}>{props.headerText}</h1>
}