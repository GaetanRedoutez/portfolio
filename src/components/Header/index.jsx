function Header() {
  return (
    <header className="bg-body-tertiary">
      <div className="container d-flex flex-row justify-content-between p-2">
        <a href="/">
          <img
            src="src\assets\images\logo\logo.png"
            alt="Logo Gaetan Redoutez"
            width={55}
          />
          <span className="mx-2">
            <span className="h5">Gaëtan Redoutez</span>
          </span>
        </a>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Accueil
              </a>
              <a className="nav-link" href="/projects">
                Projets
              </a>
              <a className="nav-link" href="/cv">
                Mon CV
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* <img src="src\assets\images\Group 7.png" alt="" /> */}
    </header>
  )
}

export default Header
