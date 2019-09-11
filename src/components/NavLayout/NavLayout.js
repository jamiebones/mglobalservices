import React, { useState, useRef } from "react"
import Burger from "../Burger/Burger"
import Menu from "../Menu/Menu"
import { useOnClickOutside } from "../../hooks"
import styled from "styled-components"

const NavStyles = styled.div`
  .logo-text {
    font-size: 1.5rem;
    position: absolute;
    top: 3%;
    right: 2rem;
    color: #7676ce;
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    .logo-text {
      font-size: 1rem;
      top: 5%;
    }
  }
`
export default function NavLayout() {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))
  return (
    <NavStyles>
      <div ref={node}>
        <p className="logo-text">MUYIWA GLOBAL SERVICES LTD</p>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </NavStyles>
  )
}
