import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `10px auto`, maxWidth: 1175, padding: `0 1rem` }}>
        <header>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <img style={{ display: `inline`, width: `150px`, height: `120px`, marginBottom: `0` }} src="/images/eye-logo.png" alt="eye logo"/>
                <h3 style={{ display: `inline`, marginBottom: `1.5rem` }}>EB</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
      </header>
      {children}
    </div>
  )
}