import PropTypes from 'prop-types'
import { useState } from 'react'
import FilterBar from '../FilterBar/index.jsx'
// import Flipbox from '../Flipbox/index.jsx'
import Loader from '../Loader/index.jsx'
import Cards from '../Cards/index.jsx'

function Projects({ projects, skills }) {
  const [activFilter, setActivFilter] = useState([])

  return (
    <div className="py-5" id="projects">
      <div className="container">
        {skills !== undefined ? (
          <FilterBar
            filterList={skills
              .filter((data) => data.showFilter)
              .map((element) => element.name)}
            activFilter={activFilter}
            setActivFilter={setActivFilter}
          />
        ) : (
          <Loader />
        )}
        {/* Projets avec les flip box */}
        {/* {projects !== undefined ? (
          <div className="grid">
            {projects.map((project) => {
              const isDisplay = project.skills.some((skill) =>
                activFilter.includes(skill)
              )

              return (
                <Flipbox
                  key={project._id}
                  projectData={project}
                  display={activFilter.length === 0 ? true : isDisplay}
                />
              )
            })}
          </div>
        ) : (
          <Loader />
        )} */}

        <p className="h1">
          --------------------------------------------------------------------------------
        </p>

        {/* Projets avec les nuances de gris */}
        {projects !== undefined ? (
          <div className="grid">
            {projects.map((project) => {
              const isDisplay = project.skills.some((skill) =>
                activFilter.includes(skill)
              )

              return (
                <Cards
                  key={project._id}
                  projectData={project}
                  display={activFilter.length === 0 ? true : isDisplay}
                />
              )
            })}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Projects

Projects.propTypes = {
  projects: PropTypes.array,
  skills: PropTypes.array
}
