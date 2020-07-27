import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Link to="contact/">Contact</Link>
      <Header headerText="Elyza Bleau" />
      <h2>Haunted EP</h2>
      <img src="/images/001-Mother-and-Lillian.jpg"/>
      <p>I'm so excited to rock with you</p>
    </div>
  )
}
