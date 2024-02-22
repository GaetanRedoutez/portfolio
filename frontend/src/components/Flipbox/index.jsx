import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Flipbox({ projectData, display }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleBox = () => {
    setIsExpanded(!isExpanded)
  }

  const imageUrl = `/assets/images/project/${projectData.image}`
  const background = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  //TODO Il faut que la transition de visible a delete soit smooth. Mais aussi que les projets restant se déplace de manière à faire un belle transition
  const fullClassName = `g-col-6 g-col-md-4 p-3 text-center  ${
    display ? '' : 'display-none move-transition'
  }`

  return (
    <div className={fullClassName}>
      <div className="flipbox" onClick={toggleBox}>
        <div className="flipbox-inner">
          <div className="flipbox-inner--front">
            <div className="flipbox-inner--front_content" style={background}>
              <div className="flipbox-inner--front_content__text">
                <h2>{projectData.name}</h2>
              </div>
            </div>
          </div>
          <div className="flipbox-inner--back">
            <div className="flipbox-inner--back_content" style={background}>
              <div className="flipbox-inner--back_content__text">
                <h2 className="h5">{projectData.description}</h2>
                <div>
                  {projectData.github !== '' ? (
                    <a
                      href={projectData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="assets/images/icons/icons8-github.png"
                        alt="Github Link"
                      />
                    </a>
                  ) : null}
                  {projectData.link !== '' ? (
                    <a
                      href={projectData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="assets/images/icons/web.png" alt="Web Link" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Flipbox.propTypes = {
  projectData: PropTypes.object.isRequired,
  display: PropTypes.bool
}

export default Flipbox
