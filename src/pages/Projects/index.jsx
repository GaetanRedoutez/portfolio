import { projectData } from '../../../data/data'
import Project from '../../components/Project'

function Projects() {
  return (
    <>
      <div className="container my-5">
        <div className="grid">
          {projectData.map((data) => (
            <Project key={data.id} projectData={data} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
