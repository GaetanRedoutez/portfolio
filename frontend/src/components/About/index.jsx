function About() {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center py-5 ">
        <div>
          <img src="assets\images\photoprofil.png" width={351} alt="" />
        </div>
        <div className="fs-4 mx-4 justify">
          <div className="d-flex flex-row justify-content-center align-items-center mb-3">
            <img
              src="assets\images\logo\logo.png"
              alt="Logo Gaetan Redoutez"
              width={55}
            />
            <h1 className="h4 m-0 mx-2 ">Gaëtan Redoutez</h1>
          </div>
          <p>
            Développeur web junior passionné et récemment formé, je suis à la
            recherche d{"'"}opportunités professionnelles pour mettre en
            pratique les compétences acquises lors de ma reconversion. <br />
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
