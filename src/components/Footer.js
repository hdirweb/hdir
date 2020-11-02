import React from 'react';
import { Link } from 'gatsby';

import { PAGES, ACTIVITY_DROPDOWN } from './Navbar';

const Footer = class extends React.Component {
  render() {
    const linkClass = "mb-2";
    const year = new Date().getFullYear();
    const lang = this.props.lang;
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
            <p><Link to="/">Hrvatsko društvo za istraživanje raka</Link></p>
            <p className="mt-6"><Link to="/en">Croatian Association for Cancer Research</Link></p>
          </div>
          <div className="text-sm md:mr-12">
            <p>Ruđer Bošković Institute</p>
            <p>Bijenička 54</p>
            <p>10000 Zagreb</p>
            <p>Croatia</p>
            <p className="mt-6">Tel: <a href="tel:+385-1-4571-292" className="font-number font-light">+385-1-4571-292</a></p>
            <p>Fax: <a href="tel:+385-1-4561-1010" className="font-number font-light">+385-1-4561-1010</a></p>
          </div>
          <div className="text-sm md:mr-12">
            <p>IBAN: <span className="font-number font-light">HR5023600001102084564</span><br/>(Zagrebačka banka)</p>
            <p className="mt-6">OIB: <span className="font-number font-light">01690550600</span></p>
            <p>MB: <span className="font-number font-light">2517744</span></p>
          </div>
        </div>
        <div className="limit pt-6">
          <p>&copy; HDIR <span className="font-number font-light">{year}</span></p>
        </div>
      </footer>
    )
  }
}

export default Footer
