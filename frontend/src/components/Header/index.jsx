import { useEffect, useRef, useState } from 'react'

function Header() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
  const headerRef = useRef(null)

  const modifyNavLink = () => {
    const navLink = document.querySelectorAll('.nav-link')

    navLink.forEach((link) => {
      if (link.classList.contains('active')) {
        link.classList.add('text-light')
      } else {
        link.classList.remove('text-light')
      }
    })
  }

  useEffect(() => {
    const handleScroll = (height, offset) => {
      modifyNavLink()
      if (window.scrollY > height + offset) {
        setSticky({ isSticky: true, offset: height })
      } else {
        setSticky({ isSticky: false, offset: 0 })
      }
    }
    const header = headerRef.current.getBoundingClientRect()
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height - 10)
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return (
    <>
      <header
        className={`bg-body-tertiary navbar ${
          sticky.isSticky ? 'sticky' : ''
        } header`}
        ref={headerRef}
      >
        <div
          className={`container header-content
          ${
            sticky.isSticky
              ? 'justify-content-center'
              : 'justify-content-between'
          }`}
        >
          {sticky.isSticky ? null : (
            <a href="/" className="nav-link header-content--link">
              <img
                src="assets\images\logo\logo.png"
                alt="Logo Gaetan Redoutez"
                width={55}
              />
              <h1 className="header-content--link_text ">Gaëtan Redoutez</h1>
            </a>
          )}
          <nav className="navbar navbar-expand" id="navbar">
            <div className="container">
              <div className="navbar-nav">
                <a className="nav-link" href="/#about">
                  À propos
                </a>
                <a className="nav-link " href="/#skills">
                  Compétences
                </a>
                <a className="nav-link " href="/#projects">
                  Projets
                </a>
                <a className="nav-link " href="/#contact">
                  Contact
                </a>
                <a className={`nav-link  `} href="/resume">
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
