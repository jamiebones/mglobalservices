/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "../global"
import NavLayout from "./NavLayout/NavLayout"
import Footer from "./footer"
import { theme } from "../theme"
import styled from "styled-components"

const LayoutStyles = styled.div``

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <LayoutStyles>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <main>{children}</main>
              </div>
            </div>
          </div>
          <NavLayout />
          <footer>
            <Footer />
          </footer>
        </LayoutStyles>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
