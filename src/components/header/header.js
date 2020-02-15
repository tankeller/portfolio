import React from "react"
import { Link } from "gatsby"

import "./header.css"

import Logo from "../logo/logo"

const Header = () => (
  <header>
    <Logo />
    <nav>
      <Link to="/blog">blog</Link>
      <Link to="/about-me">about me</Link>
      <Link to="/my-work">my work</Link>
    </nav>
  </header>
)

export default Header
