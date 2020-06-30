import { func } from "prop-types";

import React from "react";

function Loader(): JSX.Element | null {

  const displayStyle: React.CSSProperties = {
    display: 'none'
  }

  return (
    <div className="c-preloader js-preloader" style={displayStyle}>
      <div className="c-preloader__spinner  t-preloader__spinner"></div>
    </div>
  )

}

export default Loader