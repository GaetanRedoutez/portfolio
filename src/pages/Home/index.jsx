import { skill } from '../../../data/data'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'

function Home() {
  return (
    <>
      <About />
      <div className="py-5 bg-body-tertiary" id="skills">
        <Skills title={'Compétences acquises'} skill={skill} state={'Acquis'} />
        <Skills
          title={"En cours d'apprentissage"}
          skill={skill}
          state={'En cours'}
        />
        <Skills title={'Au planning'} skill={skill} state={'Prévu'} />
      </div>
      <Projects />
      <Contact />
    </>
  )
}

export default Home
