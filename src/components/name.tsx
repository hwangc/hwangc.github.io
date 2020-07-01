import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Name = ({ customClass }) => {
  const data = useStaticQuery(graphql`
    query NameInfo {
      site {
        siteMetadata {
          header {
            firstname {
              en
              ko
            }
            lastname {
              en
              ko
            }
          }
        }
      }
    }
  `)

  return (
    <h1 className="c-brand__title t-title">
      <span className="c-brand__sizer">
        <span className={customClass + " c-brand__first-word  t-title__first-word in-view" } >
          {data.site.siteMetadata.header.firstname.ko}
          {data.site.siteMetadata.header.firstname.en}
        </span>
        <span className={customClass + " c-brand__second-word  t-title__second-word in-view" } >
          {data.site.siteMetadata.header.lastname.en}
          {data.site.siteMetadata.header.lastname.ko}
        </span>
      </span>
    </h1>
  )
}

export default Name
