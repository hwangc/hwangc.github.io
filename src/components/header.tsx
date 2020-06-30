import PropTypes from "prop-types"
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

const Header = () => {
  const data = useStaticQuery(graphql`
    query BaseInfo {
      site {
        siteMetadata {
          header {
            firstname
            lastname
            occupation
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
            social {
              facebook
              dribble
              twitter
            }
            avatar
          }
        }
      }
      file(relativePath: { eq: "david_face_2.png" }) {
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
                      <h1 className="c-brand__title  t-title">
                        <span className="c-brand__sizer">
                          <span className="a-header  c-brand__first-word  t-title__first-word in-view">
                            호연{data.site.siteMetadata.header.firstname}
                          </span>
                          <span className="a-header  c-brand__second-word  t-title__second-word in-view">
                            {data.site.siteMetadata.header.lastname}황
                          </span>
                        </span>
                      </h1>
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
                  <div className="o-grid">
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content in-view">
                        <div className="o-content__body">
                          <h4>Location</h4>
                          <address>
                            {data.site.siteMetadata.header.location}
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content in-view">
                        <div className="o-content__body">
                          <h4>Phone</h4>
                          <p>{data.site.siteMetadata.header.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div className="a-header  o-content in-view">
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
                      <div className="a-header  o-content in-view">
                        <div className="o-content__body">
                          <a
                            href={
                              "mailto: " +
                              data.site.siteMetadata.header.email.url
                            }
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
