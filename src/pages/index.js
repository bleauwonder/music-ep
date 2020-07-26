import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="contact/">Contact</Link>
      <Header headerText="Elyza Bleau" />
      <p>Haunted EP</p>
      <img src="/images/001-Mother-and-Lillian.jpg"/>
    </div>
  )
}
