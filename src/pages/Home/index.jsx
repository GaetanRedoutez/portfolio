import { skill } from '../../../data/data'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'

function Home() {
  return (
    <>
      <About />
      <Projects />
      <div className="mx-5">
        <Skills title={'Compétences acquises'} skill={skill} state={'Acquis'} />
        <Skills
          title={"En cours d'apprentissage"}
          skill={skill}
          state={'En cours'}
        />
        <Skills title={'Au planning'} skill={skill} state={'Prévu'} />
      </div>
    </>
  )
}

export default Home
