function Footer() {
  return (
    <div className="bg-dark mt-auto">
      <div className="container">
        <footer className="footer py-3 ">
          <ul className="footer-icon col-md-4 list-unstyled">
            <li className="mx-5">
              <a href="mailto:redoutezgaetan@gmail.com">
                <img src="assets\images\icons\mail-svgrepo-com.png" alt="" />
              </a>
            </li>

            <li className="mx-5">
              <a
                href="https://github.com/GaetanRedoutez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets\images\icons\icons8-github.png" alt="" />
              </a>
            </li>

            <li className="mx-5">
              <a
                href="http://www.linkedin.com/in/gaëtan-redoutez-b090a317b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="assets\images\icons\icons8-linkedin.png" alt="" />
              </a>
            </li>
          </ul>
          <p className="mb-3 mb-md-0 text-light">
            © 2024 Gaëtan REDOUTEZ, Tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer
