import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CertificateItem = ({ items }) => {
  return items.map(
    (item: { url: string; title: string; time: string; institue: string }) => {
      return (
        <div className="o-grid__col-xl-4  o-grid__col-sm-6">
          <div className="o-content">
            <a href={item.url} target="_blank" className="t-link-container">
              <div className="o-media  o-media--block in-view">
                <div className="o-media__figure">
                  <div className="c-profile__icon">
                    <i className="fab  fa-lg  fa-github-alt in-view"></i>
                  </div>
                </div>
                <div className="o-media__body  o-content__body">
                  <h3 className="t-link-container__item">{item.title}</h3>
                  <p>
                    {item.institue}, Issued {item.time}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )
    }
  )
}

const Certificate = () => {
  const data = useStaticQuery(graphql`
    query Certificates {
      site {
        siteMetadata {
          certificates {
            title
            time
            url
            institue
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
              <h2 className="o-section__heading">Certificates</h2>
              <div className="o-content__body  o-section__description">
                Busy as usual.
              </div>
            </div>
          </header>

          <div className="o-section__content  t-section__content  ">
            <div className="o-grid">
              <CertificateItem items={data.site.siteMetadata.certificates} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
