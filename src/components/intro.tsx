import React from "react"
import { useStaticQuery, graphql } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query IntroInfo {
      site {
        siteMetadata {
          intro {
            subtitle
            mainContent
          }
        }
      }
    }  
  `)

  return (
    <section className="o-section  t-section  ">
      <div className="o-section__header-bg  t-section__header"></div>
      <div className="o-section__content-bg  t-section__content"></div>
      <div className="o-container">
        <div className="o-section__container">
          <header className="o-section__header  t-section__header">
            <div className="o-content">
              <h2 className="o-section__heading">Intro</h2>
              <div className="o-content__body  o-section__description">
                {data.site.siteMetadata.intro.subtitle}
              </div>
            </div>
          </header>
          <div className="o-section__content  t-section__content  ">
            <div className="o-content">
              <div className="c-intro">
                <div className="o-content__body" dangerouslySetInnerHTML={
                  { __html: `${data.site.siteMetadata.intro.mainContent}` }
                }>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
