import { func } from "prop-types";

import React from "react";

function Loader(): JSX.Element | null {

  return (
    <div className="c-preloader js-preloader">
      <div className="c-preloader__spinner  t-preloader__spinner"></div>
    </div>
  )

}

export default Loader