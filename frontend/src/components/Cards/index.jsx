import PropTypes from 'prop-types'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

import Modal from 'react-modal'

function Cards({ projectData, display }) {
  const [isHover, setIsHover] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)

  let subtitle

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black'
  }

  function closeModal() {
    setIsOpen(false)
  }

  const imageName = projectData.image

  const imageUrl = `/assets/images/project/${imageName}`
  const background = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: isHover ? 'grayscale(0)' : 'grayscale(1)'
  }

  const fullClassName = `cards my-3 g-col-6 g-col-md-4 text-center  ${
    display ? '' : 'display-none'
  }`

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px'
    }
  }

  const pathToSkills = 'assets/images/skills/'
  const extensionSkills = '.png'
  return (
    <>
      <Tooltip id="project-tooltip" />
      <div
        style={background}
        className={fullClassName}
        data-tooltip-id="project-tooltip"
        data-tooltip-content="Cliquer pour voir les détails"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={openModal}
      >
        {/* <div className="cards-title p-0">
          <h2 className="cards-title-text">{projectData.name}</h2>
        </div> */}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Project Modal"
        ariaHideApp={false}
      >
        <Tooltip id="skill-tooltip" />
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
          <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="me-4">
            {projectData.name} -{' '}
            <span className="h4"> {projectData.type} </span>
          </h2>
          <button className="btn btn-primary" onClick={closeModal}>
            X
          </button>
        </div>
        <img
          src={`/assets/images/project/${imageName}`}
          alt="Image du projet"
          className="my-3 modal-image"
        />
        <div>
          <h3 className="fs-4 my-3">Description</h3>
          <div className="fs-4 my-3">{projectData.description}</div>
          <h3 className="hidden m-0 p-0">Compétences</h3>
          <div className="d-flex justify-content-around pt-3 border-top">
            {projectData.skills.map((skill, key) => (
              <img
                data-tooltip-id="skill-tooltip"
                data-tooltip-content={skill}
                key={Date.now() + key}
                src={`${pathToSkills}${skill}${extensionSkills}`}
                alt={`Skills icon ${skill}`}
                className="mx-2"
                height={45}
              />
            ))}
          </div>
          <h3 className="hidden m-0 p-0">Liens</h3>
          <div className="d-flex align-items-center justify-content-around pt-3 border-top">
            {projectData.github !== '' ? (
              <a
                className="mx-3"
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/images/icons/GitHub_Logo.png"
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
                <img
                  src="assets/images/icons/web2.png"
                  alt="Web Link"
                  height={45}
                />
              </a>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Cards

Cards.propTypes = {
  projectData: PropTypes.object.isRequired,
  display: PropTypes.bool
}
