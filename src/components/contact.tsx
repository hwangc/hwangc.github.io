import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Contact = ({ customClass }: { customClass: string }) => {
  const data = useStaticQuery(graphql`
    query BaseInfo {
      site {
        siteMetadata {
          header {
            location
            phone
            web {
              title
              url
            }
            email {
              title
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div className="o-grid">
      <div className="o-grid__col-md-3  o-grid__col-sm-6">
        <div className={customClass + " o-content"}>
          <div className="o-content__body">
            <h4>Location</h4>
            <address>{data.site.siteMetadata.header.location}</address>
          </div>
        </div>
      </div>
      <div className="o-grid__col-md-3  o-grid__col-sm-6">
        <div className={customClass + " o-content"}>
          <div className="o-content__body">
            <h4>Phone</h4>
            <p>{data.site.siteMetadata.header.phone}</p>
          </div>
        </div>
      </div>
      <div className="o-grid__col-md-3  o-grid__col-sm-6">
        <div className={customClass + " o-content"}>
          <div className="o-content__body">
            <a
              href={data.site.siteMetadata.header.web.url}
              target="_blank"
              className="t-link-container"
            >
              <h4>Web</h4>
              <p>
                <span className="t-link-container__item--blended">
                  {data.site.siteMetadata.header.web.title}
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="o-grid__col-md-3  o-grid__col-sm-6">
        <div className={customClass + " o-content"}>
          <div className="o-content__body">
            <a
              href={data.site.siteMetadata.header.email.url}
              target="_blank"
              className="t-link-container"
            >
              <h4>Email</h4>
              <p>
                <span className="t-link-container__item--blended">
                  {data.site.siteMetadata.header.email.title}
                </span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
