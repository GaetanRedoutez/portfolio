import { useEffect, useState } from 'react'
import { getProjects, getSkills } from '../../../utils/api'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Header from '../../components/Header'

function Home() {
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await getSkills()
        setSkills(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSkill()

    const fetchProjects = async () => {
      try {
        const response = await getProjects()
        setProjects(response)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProjects()
  }, [])

  return (
    <>
      <Header isHome={true} />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar"
        data-bs-smooth-scroll="true"
        className="scrollspy"
        data-offset="100"
        tabIndex="0"
      >
        <About />
        <div className="py-5 background-secondary" id="skills" data-spy>
          <Skills
            title={'Compétences acquises'}
            skills={skills}
            state={'Acquis'}
          />
          <Skills
            title={"En cours d'apprentissage"}
            skills={skills}
            state={'En cours'}
          />
          <Skills title={'Au planning'} skills={skills} state={'Prévu'} />
        </div>
        <Projects projects={projects} skills={skills} />
        <Contact />
      </div>
    </>
  )
}

export default Home
