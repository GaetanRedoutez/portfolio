import PropTypes from 'prop-types'
import { useState } from 'react'

function Flipbox({ projectData }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleBox = () => {
    setIsExpanded(!isExpanded)
  }

  const imageUrl = `src/assets/images/project/${projectData.image}`
  const background = {
    backgroundImage: `url(${imageUrl})`
  }

  return (
    <div className="g-col-6 g-col-md-4 p-3 text-center ">
      <div className="flipbox" onClick={toggleBox}>
        <div className="flipbox-inner">
          <div className="flipbox-inner--front">
            <div className="flipbox-inner--front_content" style={background}>
              <h2 className="d-flex justify-content-center align-items-center">
                {projectData.name}
              </h2>
            </div>
          </div>
          <div className="flipbox-inner--back" style={background}>
            <div className="flipbox-inner--back_content" style={background}>
              <h2 className="h5 d-flex justify-content-center align-items-center">
                {projectData.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="fs-5">{}</div>
    </div>
  )
}

Flipbox.propTypes = {
  projectData: PropTypes.object.isRequired
}

export default Flipbox

//TODO Faire flip box pour carte : Image titre en avant - Details en arriere
//TODO A l'arriere ajouter un logo web et un github pour les liens vers les projets

{
  /* {isHover && (
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
)} */
}
