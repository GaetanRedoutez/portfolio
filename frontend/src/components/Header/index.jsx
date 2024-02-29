import { useEffect, useRef, useState } from 'react'

function Header() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current.getBoundingClientRect()
      const offset = header.height - 10

      if (window.scrollY > header.top + offset) {
        setSticky({ isSticky: true, offset: header.height + 100 })
      } else {
        setSticky({ isSticky: false, offset: 0 })
      }
    }

    const handleScrollEvent = () => {
      handleScroll()
    }

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [headerRef])

  return (
    <>
      <header
        className={`bg-body-tertiary navbar ${
          sticky.isSticky ? 'sticky' : ''
        } header`}
        ref={headerRef}
      >
        <div
          className={`container header-content sticky-content ${
            sticky.isSticky ? 'header-sticky' : 'header-nosticky'
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
          <nav className="navbar" id="navbar">
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
