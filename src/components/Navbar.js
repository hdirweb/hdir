import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

export const ACTIVITY_DROPDOWN = [
  {
    "en": { "title": "Meetings", "url": "/en/meetings" },
    "hr": { "title": "Sastanci", "url": "/sastanci" }
  },
  {
    "en": { "title": "Lectures", "url": "/en/lectures" },
    "hr": { "title": "Predavanja", "url": "/predavanja" }
  },
  {
    "en": { "title": "Conferences", "url": "/en/conferences" },
    "hr": { "title": "Konferencije", "url": "/konferencije" }
  },
  {
    "en": { "title": "Workshops", "url": "/en/workshops" },
    "hr": { "title": "Radionice", "url": "/radionice" }
  },
  {
    "en": { "title": "All activities", "url": "/en/activities" },
    "hr": { "title": "Sve aktivnosti", "url": "/aktivnosti" }
  },
]

export const PAGES = [
  {
    "en": { "title": "HR", "url": "/" },
    "hr": { "title": "EN", "url": "/en/" }
  },
  {
    "en": { "title": "About", "url": "/en/about" },
    "hr": { "title": "O društvu", "url": "/o-društvu" }
  },
  {
    "en": { "title": "Membership", "url": "/en/membership" },
    "hr": { "title": "Članstvo", "url": "/članstvo" }
  },
  {
    "en": { "title": "Activities", "url": "/en/activities" },
    "hr": { "title": "Aktivnosti", "url": "/aktivnosti" },
    "dropdown": ACTIVITY_DROPDOWN
  },
  {
    "en": { "title": "Contact", "url": "/en/contact" },
    "hr": { "title": "Kontakt", "url": "/kontakt" }
  }
]

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const background = this.props.background;
    const btn = `${background ? "text-gray-600" : "text-white"} text-2xl tracking-wider flex-no-grow flex-no-shrink relative p-4 leading-normal no-underline flex items-center hover:bg-grey-dark`;
    const btnDropdown = 'px-2 py-2 block';
    const btnSm = `px-4 py-3`;
    const lang = this.props.lang;
    return (
      <div>
        <nav className={`${background ? "bg-gray-200" : "absolute"} px-6 pb-10 lg:pb-0 md:px-8 z-50 select-none bg-grey lg:flex lg:items-stretch w-full`}>
          <div className="flex flex-no-shrink items-stretch h-10 lg:h-12">
            <Link to={`${lang == 'hr' ? '' : '/en'}`} className="flex-no-grow flex-no-shrink relative py-6" title="HDIR Logo">
              <img src={logo} alt="HDIR" className="w-24" />
            </Link>
          </div>
          <div className="hidden py-6 lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
              {PAGES.map(page => (
                <div className="group">
                  <Link className={btn} to={page[lang].url}>{page[lang].title}</Link>
                  {page.dropdown && 
                    <div class="items-center m-auto text-md text-white absolute rounded-lg shadow bg-gray-600 p-2 ml-1 invisible group-hover:visible w-auto">
                      {page.dropdown.map(subpage => (
                        <Link className={btnDropdown} to={subpage[lang].url}>{subpage[lang].title}</Link>
                      ))}
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <div className="cursor-pointer text-right text-white flex justify-end" onClick={() => this.toggleHamburger()}>
              <p className={`${background ? "text-gray-600" : ""} w-4 text-xl`} style={{ transform: "rotate(90deg)" }}>|||</p>
            </div>
            <div
              className={`${this.state.active ? "flex justify-end absolute mt-4" : "hidden"}`}
              style={{ right: "1.5rem" }}
            >
              <div className="flex flex-col rounded-lg shadow bg-gray-200 p-2 items-stretch text-xl">
                {PAGES.map(page => (
                  <React.Fragment>
                    <Link className={btnSm} to={page[lang].url}>{page[lang].title}</Link>
                    {page.dropdown && 
                      <React.Fragment>
                        {page.dropdown.map(subpage => (
                          <Link className={btnSm} to={subpage[lang].url}>{subpage[lang].title}</Link>
                        ))}
                      </React.Fragment>
                    }
                  </React.Fragment>
                ))}
              </div>
            </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
