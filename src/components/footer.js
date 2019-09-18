import React from "react"
import styled from "styled-components"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa"

const FooterStyles = styled.div`
  height: 50px;
  background: #b2bbe4;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2000;

  .social-media-wrapper {
    position: absolute;
    right: 5px;
    bottom: 1px;
  }

  span {
    font-size: 1rem;
    padding: 10px;
    color: blue;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    .social-media-wrapper {
      right: 5px;
      bottom: 2px;
    }

    span {
      font-size: 0.6rem;
      padding: 5px;
    }
  }
`

export default function footer() {
  return (
    <FooterStyles>
      <p>
        <span>
          <FaPhone /> +234-8120000036
        </span>
      </p>
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
    </FooterStyles>
  )
}
