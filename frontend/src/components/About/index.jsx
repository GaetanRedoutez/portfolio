/**
 * About component for the home page
 * @returns {JSX.Element}
 */
function About() {
  return (
    <>
      <div className="container py-5 about" id="about">
        <img
          src="assets\images\photoprofil.png"
          alt=""
          className="about-image"
        />
        <div className="mx-4  about-text">
          <p>
            Développeur web junior passionné et récemment formé, je suis à la
            recherche d{"'"}opportunités professionnelles pour mettre en
            pratique les compétences acquises lors de ma reconversion.
            <br />
            Dynamique et déterminé, je suis prêt à contribuer à des projets
            stimulants et à continuer à apprendre dans un environnement
            professionnel
          </p>
        </div>
      </div>
    </>
  )
}

export default About
