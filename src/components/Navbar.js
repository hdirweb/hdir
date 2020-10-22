import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import { transform } from 'lodash'

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
    const buttonClass = `text-white text-2xl tracking-wider flex-no-grow flex-no-shrink relative p-4 leading-normal no-underline flex items-center hover:bg-grey-dark`;
    const dropdownButtonClass = 'px-4 py-2 block';
    const mobileButtonClass = `px-4 py-3`;
    return (
      <div>
        <nav className={`${this.props.background ? "bg-brown-900" : "absolute"} px-6 pb-10 lg:pb-0 md:px-8 z-50 select-none bg-grey lg:flex lg:items-stretch w-full`}>
          <div className="flex flex-no-shrink items-stretch h-10 lg:h-12">
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
              <div className="group">
                <a className={buttonClass} href="#">Aktivnosti</a>
                <div class="items-center m-auto text-lg absolute rounded-lg shadow bg-gray-200 p-2 invisible group-hover:visible w-auto">
                    <Link className={dropdownButtonClass} to="/meetings">Sastanci</Link>
                    <Link className={dropdownButtonClass} to="/lectures">Predavanja</Link>
                    <Link className={dropdownButtonClass} to="/conferences">Konferencije</Link>
                    <Link className={dropdownButtonClass} to="/workshops">Radionice</Link>
                    <hr class="border-t mx-2 border-gray-400" />
                    <Link className={dropdownButtonClass} to="/activities">Sve Aktivnosti</Link>
                </div>
              </div>
              <Link className={buttonClass} to="/contact">
                Kontakt
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="cursor-pointer text-right text-white flex justify-end" onClick={() => this.toggleHamburger()}>
              <p className="w-4 text-xl" style={{ transform: "rotate(90deg)" }}>|||</p>
            </div>
            <div
              className={`${this.state.active ? "flex justify-end absolute mt-4" : "hidden"}`}
              style={{ right: "1.5rem" }}
            >
              <div className="flex flex-col rounded-lg shadow bg-gray-200 p-2 items-stretch text-xl">
                <Link className={mobileButtonClass} to="/about">
                  O društvu
                </Link>
                <Link className={mobileButtonClass} to="/membership">
                  Članstvo
                </Link>
                <Link className={mobileButtonClass} to="/meetings">Sastanci</Link>
                <Link className={mobileButtonClass} to="/lectures">Predavanja</Link>
                <Link className={mobileButtonClass} to="/conferences">Konferencije</Link>
                <Link className={mobileButtonClass} to="/workshops">Radionice</Link>
                <Link className={mobileButtonClass} to="/activities">Sve Aktivnosti</Link>
                <Link className={mobileButtonClass} to="/contact">
                  Kontakt
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
