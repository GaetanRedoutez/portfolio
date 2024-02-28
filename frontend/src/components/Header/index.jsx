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

  const classNameHeader = `container d-flex flex-row p-2 ${
    sticky.isSticky ? 'justify-content-center' : 'justify-content-between'
  }`

  return (
    <>
      <header
        className={`bg-body-tertiary navbar ${sticky.isSticky ? 'sticky' : ''}`}
        ref={headerRef}
      >
        <div className={classNameHeader}>
          {sticky.isSticky ? null : (
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
          <nav className="navbar navbar-expand-lg " id="navbar">
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
