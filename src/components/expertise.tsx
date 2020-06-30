import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ExpertiseItem = ({ items }) => {
  return items.map((item: {title:string, description:string}, idx:number):JSX.Element => (
    <div key={idx} className="o-grid__col-sm-6">
      <div className="o-media  o-media--block  o-content in-view">
        <div className="o-media__figure">
          <div className="c-number  t-primary-color">0{idx+1}</div>
        </div>
        <div className="o-media__body  o-content__body">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  ))
}

const Expertise = () => {

  const data = useStaticQuery(graphql`
    query ExpertiseInfo {
      site {
        siteMetadata {
          expertise {
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
              <h2 className="o-section__heading">Competency</h2>
              <div className="o-content__body  o-section__description">
                Batman would be jealous.
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="o-grid">
              <ExpertiseItem items={data.site.siteMetadata.expertise}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
