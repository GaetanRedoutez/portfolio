import { useEffect, useRef, useState } from 'react'

/**
 * Header component to display the navigation bar with sticky functionality
 * @returns {JSX.Element} - JSX element representing the header
 */
function Header() {
  // State variable to track whether header is sticky and its offset
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 })

  // Ref to access the header DOM element
  const headerRef = useRef(null)

  // Effect hook to handle scrolling and update sticky state
  useEffect(() => {
    const handleScroll = () => {
      // Get header bounding rectangle
      const header = headerRef.current.getBoundingClientRect()

      // Offset for sticky behavior
      const offset = header.height - 10

      if (window.scrollY > header.top + offset) {
        // If scrolled past the header, make it sticky
        setSticky({ isSticky: true, offset: header.height + 100 })
      } else {
        // If not scrolled past the header, remove sticky behavior
        setSticky({ isSticky: false, offset: 0 })
      }
    }

    const handleScrollEvent = () => {
      handleScroll() // Invoke scroll handler
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      // Remove scroll event listener on component unmount
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [headerRef]) // Depend on headerRef to avoid unnecessary re-renders

  return (
    <>
      {/* Header */}
      <header
        className={`bg-body-tertiary navbar ${
          sticky.isSticky ? 'sticky' : ''
        } header`}
        ref={headerRef}
      >
        {/* Header content */}
        <div
          className={`container header-content sticky-content ${
            sticky.isSticky ? 'header-sticky' : 'header-nosticky'
          }`}
        >
          {/* Logo and title */}
          {/* Display only if not sticky */}
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

          {/* Navigation menu */}
          <nav className="navbar" id="navbar">
            <div className="container">
              <div className="navbar-nav">
                {/* Navigation links */}
                <a
                  className={`nav-link ${
                    window.location.href.includes('/resume') ? null : 'active'
                  } `}
                  href="/#about"
                >
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

                {/* Active class added conditionally for 'Mon CV' link */}
                <a
                  className={`nav-link ${
                    window.location.href.includes('/resume') ? 'active' : null
                  } `}
                  href="/resume"
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
