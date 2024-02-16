import { useState } from 'react'
import { projectData, skill } from '../../../data/data'
import Flipbox from '../Flipbox/index.jsx'
import FilterBar from '../FilterBar/index.jsx'

function Projects() {
  const [activFilter, setActivFilter] = useState([])

  const skillArray = Object.entries(skill)

  const skillNames = skillArray.map((element) =>
    element[1].showFilter ? element[1].name : null
  )

  const skillFilter = skillNames.filter((element) => element !== null)

  const filteredProject = Object.entries(projectData).filter((element) => {
    const projectSkills = element[1].skills.map((skill) => skill.name)
    return activFilter.every((filter) => projectSkills.includes(filter))
  })

  return (
    <div className="container">
      <FilterBar
        filterList={skillFilter}
        activFilter={activFilter}
        setActivFilter={setActivFilter}
      />
      <div className="grid">
        {filteredProject.map((data) => (
          <Flipbox key={Date.now() + data[1].id} projectData={data[1]} />
        ))}
      </div>
    </div>
  )
}

export default Projects
