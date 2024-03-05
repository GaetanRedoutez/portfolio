import PropTypes from 'prop-types'
import { useState } from 'react'
import FilterBar from '../FilterBar/index.jsx'
// import Flipbox from '../Flipbox/index.jsx'
import Cards from '../Cards/index.jsx'
import Loader from '../Loader/index.jsx'

/**
 * Projects component to display project cards with filtering functionality
 * @param {Object} props - The component props
 * @param {Array} props.projects - The list of projects to display
 * @param {Array} props.skills - The list of skills for filtering
 * @returns {JSX.Element} - JSX element representing the projects section
 */
function Projects({ projects, skills }) {
  // State variable to track active filters
  const [activFilter, setActivFilter] = useState([])

  // Rendering the Projects component
  return (
    <div className="py-5" id="projects" data-spy>
      <div className="container">
        {/* Filter bar */}
        {/* Display FilterBar component if skills data is available, otherwise display Loader */}
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

        {/* Project cards */}
        {/* Display project cards if projects data is available, otherwise display Loader */}
        {projects !== undefined ? (
          <div className="projects">
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
