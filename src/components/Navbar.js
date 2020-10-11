import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

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
    const buttonClass = "font-black uppercase tracking-wider flex-no-grow flex-no-shrink relative p-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark";
    return (
      <div>
        <nav className="absolute px-6 md:px-8 z-50 select-none bg-grey lg:flex lg:items-stretch w-full">
          <div className="flex flex-no-shrink items-stretch h-12">
            <Link to="/" className="flex-no-grow flex-no-shrink relative py-6" title="HDIR Logo">
              <img src={logo} alt="HDIR" className="w-24" />
            </Link>
          </div>
          <div className="hidden py-6 lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
            <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
              <Link className={buttonClass} to="/about">
                O društvu
              </Link>
              <Link className={buttonClass} to="/membership">
                Članstvo
              </Link>
              <Link className={buttonClass} to="/">
                Aktivnosti
              </Link>
              <Link className={buttonClass} to="/contact">
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
        <nav
          className="hidden navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/about">
                  O DRUŠTVU
                </Link>
                <Link className="navbar-item" to="/products">
                  ČLANSTVO
                </Link>
                <Link className="navbar-item" to="/blog">
                  AKTIVNOSTI
                </Link>
                <Link className="navbar-item" to="/contact">
                  KONTAKT
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
