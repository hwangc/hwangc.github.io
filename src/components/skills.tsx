import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SkllItem = ({ items }) => {
  return items.map((item: { score: number; title: string }, idx: number) => {
    return (
      <div key={idx} className="o-grid__col-sm-6">
        <div className="o-content">
          <div className="o-media  o-media--block in-view">
            <div className="o-media__figure">
              <div className="c-number  t-primary-color">
                {item.score}
                <small>%</small>
              </div>
            </div>
            <div className="o-media__body">
              <h3>{item.title}</h3>
            </div>
          </div>
          <div className="c-progress-bar  o-content__body  t-border-color-bg  u-mt-text">
            <div
              className="a-progress-bar  c-progress-bar__filler  t-primary-bg in-view"
              data-percent={item.score}
            ></div>
          </div>
        </div>
      </div>
    )
  })
}

const Skills = () => {
  const data = useStaticQuery(graphql`
    query SkillsInfo {
      site {
        siteMetadata {
          skills {
            score
            title
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
              <h2 className="o-section__heading">Skills</h2>
              <div className="o-content__body  o-section__description">
                Progress bars, anyone?
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="o-grid">
              <SkllItem items={data.site.siteMetadata.skills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
