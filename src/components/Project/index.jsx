import PropTypes from 'prop-types'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

/**
 * Return a card with project data
 * @param {Object} data Need an object from Data array
 * @returns {JSX}
 */
function Project({ projectData }) {
  const [isHover, setIsHover] = useState(false)

  const imageUrl = `src/assets/images/project/${projectData.image}`
  const background = {
    backgroundImage: `url(${imageUrl})`
  }

  const tooltipContent = projectData.demo
    ? 'Accéder au site ! '
    : 'Pas de démo, mais vous pouvez voir le code sur Github !'
  return (
    <div className="g-col-6 g-col-md-4 p-3 text-center ">
      <div
        className="project"
        style={background}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover && (
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">
            <div
              className="project-text p-2"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={tooltipContent}
            >
              <div className="pb-2">{projectData.type}</div>
              <div>{projectData.description}</div>
              <Tooltip id="my-tooltip" />
            </div>
          </a>
        )}
      </div>
      <div className="fs-5">{projectData.name}</div>
    </div>
  )
}

export default Project

Project.propTypes = {
  projectData: PropTypes.object.isRequired
}
