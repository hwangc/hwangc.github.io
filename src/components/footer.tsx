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
            web
            email
            firstname
            lastname
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
                      <a href="#" target="_blank" className="t-link-container">
                        <h4>Web</h4>
                        <p>
                          <span className="t-link-container__item--blended">
                            {data.site.siteMetadata.header.web}
                          </span>
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="o-grid__col-md-3  o-grid__col-sm-6">
                  <div className="o-content">
                    <div className="o-content__body">
                      <a href="#" target="_blank" className="t-link-container">
                        <h4>Email</h4>
                        <p>
                          <span className="t-link-container__item--blended">
                            {data.site.siteMetadata.header.email}
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
                          <span
                            className="a-footer  c-brand__first-word  t-title__first-word in-view"
                            data-sr-id="15"
                          >
                            {data.site.siteMetadata.header.firstname}
                          </span>
                          <span
                            className="a-footer  c-brand__second-word  t-title__second-word in-view"
                            data-sr-id="16"
                          >
                            {data.site.siteMetadata.header.lastname}
                          </span>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                <ul className="c-footer__social-buttons  c-social-buttons  o-content__body">
                  <li className="a-footer in-view" data-sr-id="17">
                    <a
                      href="https://www.facebook.com/RuvenThemes/"
                      target="_blank"
                      className="c-social-button  t-social-button"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="in-view fa-lg fab"
                      />
                    </a>
                  </li>
                  <li className="a-footer in-view" data-sr-id="18">
                    <a
                      href="https://dribbble.com/"
                      target="_blank"
                      className="c-social-button  t-social-button"
                    >
                      <FontAwesomeIcon
                        icon={faDribbble}
                        className="in-view fa-lg fab"
                      />
                    </a>
                  </li>
                  <li className="a-footer in-view" data-sr-id="19">
                    <a
                      href="https://twitter.com/_Ruven"
                      target="_blank"
                      className="c-social-button  t-social-button"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="in-view fa-lg fab"
                      />
                    </a>
                  </li>
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
