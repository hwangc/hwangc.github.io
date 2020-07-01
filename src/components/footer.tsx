import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  faDribbble,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Name from "../components/name"
import Contact from "../components/contact"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          header {
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
              <Contact customClass="" />
            </div>
            <hr className="c-footer__contact-divider" />
            <div className="o-content">
              <div className="c-footer__bottom">
                <div className="c-footer__brand">
                  <div className="c-brand">
                    <div className="o-content__body">
                      <Name customClass="a-footer" />
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
