import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import Logo from "./muyiwalogo.jpg"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa"

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
      <a href="https://travel.mglobalservicesltd.com" target="_blank">
        <span role="img" aria-label="about us"></span>
        Travel
      </a>
      <a href="/">
        <span role="img" aria-label="price"></span>
        Services
      </a>
      <a href="/">
        <span role="img" aria-label="contact"></span>
        Contact
      </a>

      <p className="social-media-wrapper">
        <span>
          <a href="https://facebook.com/mglobalservicesltd" target="_blank">
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a href="https://twitter.com/MGSLTD1" target="_blank">
            <FaTwitter />
          </a>
        </span>

        <span>
          <a
            href="https://www.instagram.com/mglobalservicesltd"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </span>

        <span>
          <a href="https://wa.me/2348120000036" target="_blank">
            <FaWhatsapp />
          </a>
        </span>
      </p>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
