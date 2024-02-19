import { useEffect, useRef, useState } from 'react'

function Header() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })
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

  return (
    <>
      <header
        className={`bg-body-tertiary navbar ${sticky.isSticky ? 'sticky' : ''}`}
        ref={headerRef}
      >
        <div className="container d-flex flex-row justify-content-between p-2">
          <a
            href="/"
            className=" nav-link active d-flex flex-row justify-content-between align-items-center"
          >
            <img
              src="assets\images\logo\logo.png"
              alt="Logo Gaetan Redoutez"
              width={55}
            />
            <h1 className="h5 m-0 mx-2 ">Gaëtan Redoutez</h1>
          </a>
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">
                  Accueil
                </a>
                <a className="nav-link" href="/#projects">
                  Projets
                </a>
                <a className="nav-link" href="/#skills">
                  Compétences
                </a>
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
                <a className="nav-link" href="/cv">
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
