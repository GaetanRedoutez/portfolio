import { useState } from 'react'
import { projectData, skill } from '../../../data/data'
import FilterBar from '../../components/FilterBar'
import Project from '../../components/Project'

function Projects() {
  const [activFilter, setActivFilter] = useState([])

  const skillArray = Object.entries(skill)

  const skillNames = skillArray.map((element) => element[1].name)

  const filteredProject = Object.entries(projectData).filter((element) => {
    const projectSkills = element[1].skills.map((skill) => skill.name)
    return activFilter.every((filter) => projectSkills.includes(filter))
  })

  return (
    <div className="container">
      <div className="grid my-5">
        <FilterBar
          filterList={skillNames}
          activFilter={activFilter}
          setActivFilter={setActivFilter}
        />
      </div>
      <div className="grid">
        {filteredProject.map((data) => (
          <Project key={Date.now() + data[1].id} projectData={data[1]} />
        ))}
      </div>
    </div>
  )
}

export default Projects
