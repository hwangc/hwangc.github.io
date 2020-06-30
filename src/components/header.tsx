import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./header.css"
import { faDribbble, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
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
            web
            email
            social {
                facebook
                dribble
                twitter
            }
            avatar
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
                  <div className="a-header  c-avatar in-view" data-sr-id="2">
                    <img
                      className="c-avatar__img"
                      src={data.site.siteMetadata.header.avatar}
                      alt=""
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
                          <span
                            className="a-header  c-brand__first-word  t-title__first-word in-view"
                            data-sr-id="3"
                          >
                            {data.site.siteMetadata.header.firstname}
                          </span>
                          <span
                            className="a-header  c-brand__second-word  t-title__second-word in-view"
                            data-sr-id="4"
                          >
                            {data.site.siteMetadata.header.lastname}
                          </span>
                        </span>
                      </h1>
                      <h2
                        className="a-header  c-brand__sub-title  t-sub-title in-view"
                        data-sr-id="5"
                      >
                        <span className="c-brand__sizer">
                          {data.site.siteMetadata.header.occupation}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <ul className="c-header__social-buttons  c-social-buttons">
                    <li className="a-header in-view" data-sr-id="6">
                      <a
                        href={data.site.siteMetadata.header.social.facebook}
                        target="_blank"
                        className="c-social-button  t-social-button"
                      >
                        <FontAwesomeIcon icon={faFacebookF} className="in-view fa-lg fab"/>
                      </a>
                    </li>
                    <li className="a-header in-view" data-sr-id="7">
                      <a
                        href={data.site.siteMetadata.header.social.dribble}
                        target="_blank"
                        className="c-social-button  t-social-button"
                      >
                        <FontAwesomeIcon icon={faDribbble} className="in-view fa-lg fab"/>
                      </a>
                    </li>
                    <li className="a-header in-view" data-sr-id="8">
                      <a
                        href={data.site.siteMetadata.header.social.twitter}
                        target="_blank"
                        className="c-social-button  t-social-button"
                      >
                        <FontAwesomeIcon icon={faTwitter} className="in-view fa-lg fab"/>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="c-header__contact">
                  <hr
                    className="a-header  c-header__contact-divider in-view"
                    data-sr-id="9"
                  />
                  <div className="o-grid">
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div
                        className="a-header  o-content in-view"
                        data-sr-id="10"
                      >
                        <div className="o-content__body">
                          <h4>Location</h4>
                          <address>
                            {data.site.siteMetadata.header.location}
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div
                        className="a-header  o-content in-view"
                        data-sr-id="11"
                      >
                        <div className="o-content__body">
                          <h4>Phone</h4>
                          <p>{data.site.siteMetadata.header.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="o-grid__col-md-3  o-grid__col-sm-6">
                      <div
                        className="a-header  o-content in-view"
                        data-sr-id="12"
                      >
                        <div className="o-content__body">
                          <a
                            href="#"
                            target="_blank"
                            className="t-link-container"
                          >
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
                      <div
                        className="a-header  o-content in-view"
                        data-sr-id="13"
                      >
                        <div className="o-content__body">
                          <a
                            href="#"
                            target="_blank"
                            className="t-link-container"
                          >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
