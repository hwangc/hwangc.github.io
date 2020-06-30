import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  faDribbble,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
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
            firstname
            lastname
            social {
              facebook
              dribble
              twitter
            }
          }
        }
      }
    }
  `)
  return (
    <section className="o-section  t-section  o-section--footer">
      <div className="o-section__header-bg  t-section__header"></div>
      <div className="o-section__content-bg  t-section__content"></div>

      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  t-section__header">
            <div className="o-content">
              <h2 className="o-section__heading">Contact</h2>
              <div className="o-content__body  o-section__description">
                Call me, maybe.
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="c-footer__contact">
              <div className="o-grid">
                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div className="o-content__body">
                      <h4>Location</h4>
                      <address>
                        {data.site.siteMetadata.header.location}
                      </address>
                    </div>
                  </div>
                </div>

                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div className="o-content__body">
                      <h4>Phone</h4>
                      <p>{data.site.siteMetadata.header.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
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
                  <div className="o-content">
                    <div className="o-content__body">
                      <a
                        href={"mailto: " + data.site.siteMetadata.header.email.url}
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
            </div>

            <hr className="c-footer__contact-divider" />

            <div className="o-content">
              <div className="c-footer__bottom">
                <div className="c-footer__brand">
                  <div className="c-brand">
                    <div className="o-content__body">
                      <h1 className="c-brand__title  t-title">
                        <span className="c-brand__sizer  c-brand__sizer--sm">
                          <span className="a-footer  c-brand__first-word  t-title__first-word in-view">
                            호연{data.site.siteMetadata.header.firstname}
                          </span>
                          <span className="a-footer  c-brand__second-word  t-title__second-word in-view">
                            {data.site.siteMetadata.header.lastname}황
                          </span>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
                <ul className="c-footer__social-buttons  c-social-buttons  o-content__body">
                  {data.site.siteMetadata.header.social.facebook && (
                    <li className="a-footer in-view">
                      <a
                        href={data.site.siteMetadata.header.social.facebook}
                        target="_blank"
                        className="c-social-button  t-social-button"
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="in-view fa-lg fab"
                        />
                      </a>
                    </li>
                  )}
                  {data.site.siteMetadata.header.social.dribble && (
                    <li className="a-footer in-view">
                      <a
                        href={data.site.siteMetadata.header.social.dribble}
                        target="_blank"
                        className="c-social-button  t-social-button"
                      >
                        <FontAwesomeIcon
                          icon={faDribbble}
                          className="in-view fa-lg fab"
                        />
                      </a>
                    </li>
                  )}
                  {data.site.siteMetadata.header.social.twitter && (
                    <li className="a-footer in-view">
                      <a
                        href={data.site.siteMetadata.header.social.twitter}
                        target="_blank"
                        className="c-social-button  t-social-button"
                      >
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="in-view fa-lg fab"
                        />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
