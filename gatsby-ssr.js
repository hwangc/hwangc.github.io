/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="jquery.js" src="jquery.min.js" defer />,
    <script key="dense.js" src="dense.js" defer />,
    <script key="nivo.js" src="nivo-lightbox.min.js" defer />,
    <script key="scrollreveal.js" src="scrollreveal.min.js" defer />,
    <script key="main.js" src="main.js" defer />,
  ])
}
