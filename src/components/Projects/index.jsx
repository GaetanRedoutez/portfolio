import { useEffect, useState } from 'react'
import { projectData, skill } from '../../../data/data'
import Flipbox from '../Flipbox/index.jsx'
import FilterBar from '../FilterBar/index.jsx'

function Projects() {
  const [activFilter, setActivFilter] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const filteredProject = Object.entries(projectData).filter((element) => {
      if (activFilter.length === 0) return true
      const projectSkills = element[1].skills.map((skill) => skill.name)
      return activFilter.every((filter) => projectSkills.includes(filter))
    })
    setTimeout(() => {
      setProjects(filteredProject)
    }, 500)
  }, [activFilter])

  return (
    <div className="py-5" id="projects">
      <div className="container">
        <FilterBar
          filterList={Object.values(skill)
            .filter((s) => s.showFilter)
            .map((s) => s.name)}
          activFilter={activFilter}
          setActivFilter={setActivFilter}
        />
        <div className="grid">
          {projects.map((data) => (
            <Flipbox
              key={Date.now() + data[1].id}
              projectData={data[1]}
              shouldFade={
                activFilter.length > 0 &&
                !data[1].skills.some((skill) =>
                  activFilter.includes(skill.name)
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
