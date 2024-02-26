import PropTypes from 'prop-types'
import { useState } from 'react'

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
                      className="mx-3"
                      href={projectData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="assets/images/icons/GitHub_Logo_White.png"
                        alt="Github Link"
                        height={45}
                      />
                    </a>
                  ) : null}
                  {projectData.link !== '' ? (
                    <a
                      className="mx-3"
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
