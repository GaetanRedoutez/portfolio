import { useEffect, useState } from 'react'
import { getProjects, getSkills } from '../../../utils/api'

import About from '../../components/About'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Header from '../../components/Header'

import scrollSpy from '../../../utils/scrollSpy'

/**
 * Home component to render the home page
 * Fetches skills and projects data from API
 * @returns {JSX.Element} - JSX element representing the home page
 */
function Home() {
  // State variable to store skills data
  const [skills, setSkills] = useState([])
  // State variable to store projects data
  const [projects, setProjects] = useState([])

  // Effect hook to fetch data
  useEffect(() => {
    // Fetch skills data from API
    const fetchSkill = async () => {
      try {
        const response = await getSkills()
        setSkills(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSkill()

    // Fetch projects data from API
    const fetchProjects = async () => {
      try {
        const response = await getProjects()
        setProjects(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProjects()
  }, []) // Runs only once after the component mounts

  scrollSpy()

  return (
    <>
      {/* Header component */}
      <Header isHome={true} />

      {/* About section */}
      <About />

      {/* Skills section */}
      <section className="py-5 background-secondary" id="skills">
        {/* Skills acquired */}
        <Skills
          title={'Compétences acquises'}
          skills={skills}
          state={'Acquis'}
        />

        {/* Skills in progress */}
        <Skills
          title={"En cours d'apprentissage"}
          skills={skills}
          state={'En cours'}
        />

        {/* Skills planned */}
        <Skills title={'Au planning'} skills={skills} state={'Prévu'} />
      </section>

      {/* Projects section */}
      <Projects projects={projects} skills={skills} />

      {/* Contact section */}
      <Contact />
    </>
  )
}

export default Home
