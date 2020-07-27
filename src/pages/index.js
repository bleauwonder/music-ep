import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Link to="contact/">Contact</Link>
      <Header headerText="Elyza Bleau" />
      <h2>Haunted EP</h2>
      <img src="/images/001-Mother-and-Lillian.jpg"/>
      <p>I'm so excited to rock with you</p>
    </div>
    </Layout>
  )
}
