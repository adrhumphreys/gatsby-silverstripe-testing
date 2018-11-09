import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/global'
import config from '../utils/config'
import Menu from "./Menu";
import Footer from "./Footer";
import theme from '../styles/theme'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menu />
            {children}
          </div>
          <Footer />
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export default Template
