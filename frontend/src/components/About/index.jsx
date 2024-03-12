/**
 * About component for the home page
 * @returns {JSX.Element}
 */
function About() {
  return (
    <>
      <section className="container py-5 about" id="about">
        <img
          src="assets\images\photoprofil.png"
          alt=""
          className="about-image"
        />
        <article className="mx-4 about-text">
          <p>
            Développeur web junior passionné et récemment formé, je suis à la
            recherche d&apos;opportunités pour mettre en pratique les
            compétences acquises lors de ma reconversion.
            <br />
            Mon expérience de programmation en automatisme démontre ma capacité
            à raisonner de manière logique, ce qui constitue un atout dans le
            développement web.
            <br />
            Dynamique et déterminé, je suis prêt à contribuer à des projets
            stimulants et à continuer d&apos;enrichir mes connaissances dans un
            environnement professionnel.
          </p>
        </article>
      </section>
    </>
  )
}

export default About
