/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  const style: React.CSSProperties = {
    display: "none",
  }

  return (
    <>
      <Helmet>
        {/* <script
          src={withPrefix("jquery.min.js")}
          type="text/javascript"
          defer
        /> */}
        {/* <script src={withPrefix("nivo-lightbox.min.js")} type="text/javascript" defer /> */}
        {/* <script src={withPrefix("dense.js")} type="text/javascript" defer />
        <script src={withPrefix("scrollreveal.min.js")} type="text/javascript" defer/>
        <script src={withPrefix("main.js")} type="text/javascript" defer /> */}
      </Helmet>
      <div className="c-main-container js-main-container" style={style}>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
