/**
 * Footer component to display footer section with contact and social media links
 * @returns {JSX.Element} - JSX element representing the footer
 */
function Footer() {
  return (
    <div className="bg-dark mt-auto">
      <div className="container">
        <footer className="footer py-3 ">
          {/* List of footer icons */}
          <ul className="footer-icon col-md-4 list-unstyled">
            {/* Email link */}
            <li className="footer-icon--item">
              <a href="mailto:contact@gaetanredoutez.fr">
                <img
                  src="assets\images\icons\mail-svgrepo-com.png"
                  alt="Mail Logo"
                />
              </a>
            </li>

            {/* GitHub link */}
            <li className="footer-icon--item">
              <a
                href="https://github.com/GaetanRedoutez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets\images\icons\icons8-github.png"
                  alt="Github Link"
                />
              </a>
            </li>

            {/* LinkedIn link */}
            <li className="footer-icon--item">
              <a
                href="http://www.linkedin.com/in/gaëtan-redoutez-b090a317b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets\images\icons\icons8-linkedin.png"
                  alt="LinkedIn Link"
                />
              </a>
            </li>
          </ul>

          {/* Copyright text */}
          <p className="footer-text mb-3 mb-md-0 text-light">
            © 2024 Gaëtan REDOUTEZ, Tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer
