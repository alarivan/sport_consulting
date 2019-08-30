import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"

import "normalize.css"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styled/Global"
import theme from "./styled/theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
