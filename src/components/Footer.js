import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

import { PAGES, ACTIVITY_DROPDOWN } from './Navbar';

class FooterQuery extends React.Component {
  render() {
    const lang = this.props.lang;
    return (
      <StaticQuery
        query={graphql`
          query Footer {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "footer" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    addressLines {
                      text
                    }
                    bank
                    email
                    iban
                    nameEN
                    nameHR
                    mb
                    oib
                    tel
                    fax
                  }
                }
              }
            }
          }
        `}
        render={(data) => <FooterComponent data={data.allMarkdownRemark.edges[0].node.frontmatter} lang={lang} />}
      />
    )
  }
}

export class FooterComponent extends React.Component {
  render() {
    const { lang } = this.props
    const { addressLines, bank, email, fax, iban, mb, nameEN, nameHR, oib, tel } = this.props.data

    const linkClass = "mb-2";
    const year = new Date().getFullYear();
    return (
      <footer className="bg-gray-400 py-12 md:py-12">
        <div className="limit md:flex justify-between">
          <div className="flex font-extrabold md:mr-12 mb-12">
            <div className="flex flex-col mr-12">
              {PAGES.filter(page => page.en.url !== '/').map(page => <Link className={linkClass} to={page[lang].url}>{page[lang].title}</Link>)}
            </div>
            <div className="flex flex-col opacity-50">
              {ACTIVITY_DROPDOWN.filter(page => page.en.url !== '/en/activities').map(page => <Link className={linkClass} to={page[lang].url}>{page[lang].title}</Link>)}
            </div>
          </div>
          <div className="pb-12 text-sm md:text-md md:mr-12" style={{ maxWidth: '180px' }}>
            <p><Link to="/">{nameHR}</Link></p>
            <p className="mt-6"><Link to="/en">{nameEN}</Link></p>
          </div>
          <div className="text-sm md:mr-12">
            {addressLines.map((line) => (
                <p>{line.text}</p>
            ))}
            <p className="mt-6">Tel: <a href={`tel:${tel}`} className="font-number font-light">{tel}</a></p>
            <p>Fax: <a href={`tel:${fax}`} className="font-number font-light">{fax}</a></p>
            <p>E-mail: <a href={`mailto:${email}`}>{email}</a></p>
          </div>
          <div className="text-sm md:mr-12">
            <p>IBAN: <span className="font-number font-light">{iban}</span><br/>{bank}</p>
            <p className="mt-6">OIB: <span className="font-number font-light">{oib}</span></p>
            <p>MB: <span className="font-number font-light">{mb}</span></p>
          </div>
        </div>
        <div className="limit pt-6">
          <p>&copy; HDIR <span className="font-number font-light">{year}</span></p>
        </div>
      </footer>
    )
  }
}

export default FooterQuery