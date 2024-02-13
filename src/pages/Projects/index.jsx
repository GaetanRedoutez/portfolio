import { useState } from 'react'
import { projectData, skill } from '../../../data/data'
import FilterBar from '../../components/FilterBar'
import Project from '../../components/Project'

function Projects() {
  const [data, updateData] = useState([])

  const skillArray = Object.entries(skill)
  let skillNames = []

  skillArray.forEach((element) => {
    const names = [element[1]['name']]
    skillNames.push(names.join())
  })
  console.log(projectData.skills)
  return (
    <>
      <div className="container my-5">
        <FilterBar
          data={projectData}
          updateData={updateData}
          filterList={skillNames}
        />
        <div className="grid">
          {data.map((data) => (
            <Project key={data.id} projectData={data} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
