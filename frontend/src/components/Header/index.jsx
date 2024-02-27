import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

function Header({ isHome }) {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
  const [activeLink, setActiveLink] = useState('')
  const headerRef = useRef(null)

  const handleScroll = (height, offset) => {
    if (window.scrollY > height + offset) {
      setSticky({ isSticky: true, offset: height })
    } else {
      setSticky({ isSticky: false, offset: 0 })
    }
  }

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect()

    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  const handleClick = (e) => {
    setActiveLink(e.target.href)
  }

  const classNameHeader = `container d-flex flex-row p-2 ${
    isHome ? 'justify-content-center' : 'justify-content-between'
  }`

  return (
    <>
      <header
        className={`bg-body-tertiary navbar ${sticky.isSticky ? 'sticky' : ''}`}
        ref={headerRef}
      >
        <div className={classNameHeader}>
          {isHome ? null : (
            <a
              href="/"
              className=" nav-link d-flex flex-row justify-content-between align-items-center home-link"
            >
              <img
                src="assets\images\logo\logo.png"
                alt="Logo Gaetan Redoutez"
                width={55}
              />
              <h1 className="h5 m-0 mx-2 ">Gaëtan Redoutez</h1>
            </a>
          )}
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <div className="navbar-nav">
                <a
                  className={`nav-link navbar-brand ${
                    activeLink.includes('/#about') ? 'active text-light' : null
                  }`}
                  href="/#about"
                  onClick={handleClick}
                >
                  À propos
                </a>
                <a
                  className={`nav-link navbar-brand ${
                    activeLink.includes('/#skills') ? 'active text-light' : null
                  }`}
                  href="/#skills"
                  onClick={handleClick}
                >
                  Compétences
                </a>
                <a
                  className={`nav-link navbar-brand ${
                    activeLink.includes('/#projects')
                      ? 'active text-light'
                      : null
                  }`}
                  href="/#projects"
                  onClick={handleClick}
                >
                  Projets
                </a>
                <a
                  className={`nav-link navbar-brand ${
                    activeLink.includes('/#contact')
                      ? 'active text-light'
                      : null
                  }`}
                  href="/#contact"
                  onClick={handleClick}
                >
                  Contact
                </a>
                <a
                  className={`nav-link navbar-brand `}
                  href="/resume"
                  onClick={handleClick}
                >
                  Mon CV
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

Header.propTypes = {
  isHome: PropTypes.bool.isRequired
}
