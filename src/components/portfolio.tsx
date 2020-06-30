import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PortfolioItem = ({ items }) => {
  return items.map((item: {
    url: string,
    title: string,
    description: string,
    image: string
  }) => {
    return (
      <div className="o-grid__col-sm-6">
        <a
          className="c-image-overlay  t-image-overlay  js-lightbox"
          href={item.url}
          data-lightbox-hidpi=""
          title=""
          data-lightbox-gallery="portfolio"
          data-title="Reaching the Clouds"
        >
          <img src={item.image} alt="" className="" />
          <div className="c-image-overlay__content">
            <h3>{item.title}</h3>
            <hr className="c-image-overlay__deco-line  t-image-overlay__deco-line" />
            <p>
              {item.description}
            </p>
          </div>
        </a>
      </div>
    )
  })
}

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query Portfolio {
      site {
        siteMetadata {
          portfolio {
            image
            url
            title
            description
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
              <h2 className="o-section__heading">Portfolio</h2>
              <div className="o-content__body  o-section__description">
                Here it gets interesting.
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  o-section__full-bottom-space">
            <div className="o-grid  o-grid--gallery">
              <PortfolioItem items={data.site.siteMetadata.portfolio} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
