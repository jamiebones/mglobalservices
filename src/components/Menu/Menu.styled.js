import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 4000;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    .logo-text {
    }
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  .social-media-wrapper {
    position: absolute;
    bottom: 0;
    left: 20%;
    transform: translate(-20%, -20%);
    span {
      margin: 10px;

      a {
        color: #1126ca;
      }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
      left: 46%;
      transform: translate(-46%, -46%);
      span {
        margin: 10px;
      }
    }
  }
`
