import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import Logo from "./muyiwalogo.jpg"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <img
        src={Logo}
        style={{
          width: 60 + "px",
          position: "absolute",
          top: 3 + "%",
          right: 2 + "rem",
        }}
      />
      <a href="/">
        <span role="img" aria-label="about us"></span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price"></span>
        Services
      </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Contact
      </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
