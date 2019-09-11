import React from "react"
import styled from "styled-components"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const FooterStyles = styled.div`
  height: 100px;
  background: #b2bbe4;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .social-media-wrapper {
    position: absolute;
    right: 5px;
    bottom: 3%;
  }

  span {
    font-size: 1.5rem;
    padding: 10px;
    color: blue;
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    .social-media-wrapper {
      right: 5px;
      bottom: 1%;
    }

    span {
      font-size: 1rem;
      padding: 5px;
    }
  }
`

export default function footer() {
  return (
    <FooterStyles>
      <p className="footer-para">
        2019 - {new Date().getFullYear()}@Muyiwa Global Services Ltd
      </p>

      <p className="social-media-wrapper">
        <span>
          <a href="">
            <FaFacebookF />
          </a>
        </span>
        <span>
          <FaTwitter />
        </span>

        <span>
          <FaInstagram />
        </span>
      </p>
    </FooterStyles>
  )
}
