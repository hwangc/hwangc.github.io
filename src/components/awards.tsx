import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const AwardsItem = ({ items }) => {
  return items.map((item: {title:string, time:string|number, description:string}, idx:number) => {
    return (
      <div key={idx} className="o-grid__col-md-4  o-grid__col-sm-6">
        <div className="o-content">
          <hr className="c-deco-line  t-primary-color-line" />
          <div className="o-content__body">
            <h3>{item.title} {item.time}</h3>
            <p>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    )
  })
}

const Awards = () => {
  const data = useStaticQuery(graphql`
    query AwardsInfo {
      site {
        siteMetadata {
          awards {
            title
            time
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
              <h2 className="o-section__heading">Activity</h2>
              <div className="o-content__body  o-section__description">
                Happy times!
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="o-grid">
              <AwardsItem items={data.site.siteMetadata.awards}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
