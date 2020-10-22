import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ExperienceItem = ({ items }) => {
  return items.map(
    (item: {
      start: string | number
      end: string | number
      title: string
      position: string
      location: string
      description: string
    }, idx:number) => {
      return (
        <div key={idx} className="c-timeline__item">
          <div className="c-timeline__point  t-timeline__point  t-primary-bg"></div>
          <div className="o-content">
            <div className="o-grid">
              <div className="o-grid__col-md-5">
                <div className="c-work__timeframe">
                  {item.start} – {item.end}
                </div>
                <h3 className="c-work__heading">{item.title}</h3>
                <h4 className="c-work__title">{item.position}</h4>
                <div className="c-work__location">{item.location}</div>
              </div>
              <div className="o-grid__col-md-7" dangerouslySetInnerHTML={{__html:item.description}}>
              </div>
            </div>
          </div>
        </div>
      )
    }
  )
}

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query Experiences {
      site {
        siteMetadata {
          experience {
            start
            end
            title
            position
            location
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
              <h2 className="o-section__heading">Work</h2>
              <div className="o-content__body  o-section__description">
                Yes. I've been around.
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  u-pb-0">
            <div className="a-experience-timeline  c-timeline  t-border-color in-view">
              <ExperienceItem items={data.site.siteMetadata.experience} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
