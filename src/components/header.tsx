import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./header.css"
import {
  faDribbble,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Name from "../components/name"
import Contact from "../components/contact"

const Header = () => {
  const data = useStaticQuery(graphql`
    query BaseInfo {
      site {
        siteMetadata {
          header {
            occupation
            social {
              facebook
              dribble
              twitter
            }
            avatar
          }
        }
      }
      file(relativePath: { eq: "profile/david.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="o-section o-section--header  t-section  t-section--header">
      <div className="c-header">
        <div className="o-section__header-bg  t-section__header"></div>
        <div className="o-section__content-bg  t-section__content"></div>
        <div className="o-container">
          <div className="o-section__container">
            <header className="o-section__header  c-header__header  t-section__header">
              <div className="c-header__inner-header">
                <div className="c-header__avatar">
                  <div className="a-header c-avatar in-view">
                    <Img
                      className="c-avatar__img"
                      fluid={data.file.childImageSharp.fluid}
                      alt="DavidHwang"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="o-section__content  c-header__content  t-section__content">
              <div className="c-header__inner-content">
                <div className="c-header__top">
                  <div className="c-header__brand">
                    <div className="c-brand">
                      <Name customClass="a-header" />
                      <h2 className="a-header  c-brand__sub-title  t-sub-title in-view">
                        <span className="c-brand__sizer">
                          {data.site.siteMetadata.header.occupation}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <ul className="c-header__social-buttons  c-social-buttons">
                    {data.site.siteMetadata.header.social.facebook && (
                      <li className="a-header in-view">
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
                      <li className="a-header in-view">
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
                      <li className="a-header in-view">
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
                <div className="c-header__contact">
                  <hr className="a-header  c-header__contact-divider in-view" />
                  <Contact customClass="a-header in-view" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
