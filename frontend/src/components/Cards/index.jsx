import PropTypes from 'prop-types'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

import Modal from 'react-modal'

/**
 * Cards component to display project cards with modal
 * @param {Object} param0 - The component props: projectData, display
 * @returns {JSX.Element} - JSX element representing project cards
 */
function Cards({ projectData, display }) {
  // Local state to manage the opening and closing of the modal
  const [modalIsOpen, setIsOpen] = useState(false)

  // Reference for the subtitle of the modal
  let subtitle

  // Function to open the modal
  function openModal() {
    setIsOpen(true)
  }

  // Function executed after the modal has opened
  function afterOpenModal() {
    subtitle.style.color = 'black'
  }

  // Function to close the modal
  function closeModal() {
    setIsOpen(false)
  }

  // Retrieving the name and URL of the project image
  const imageName = projectData.image
  const imageUrl = `/assets/images/project/${imageName}`

  // Background style for the project card
  const background = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  // Full class name for the project card
  const fullClassName = `cards text-center  ${display ? '' : 'display-none'}`

  // Styles for the modal
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

  // Path to skills images and their file extension
  const pathToSkills = 'assets/images/skills/'
  const extensionSkills = '.png'

  return (
    <>
      {/* Tooltip component for project */}
      <Tooltip id="project-tooltip" />

      {/* Displayed card */}
      <div
        style={background}
        className={fullClassName}
        data-tooltip-id="project-tooltip"
        data-tooltip-content="Cliquer pour voir les détails"
        onClick={openModal}
      />

      {/* Modal displayed after click on card */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Project Modal"
        ariaHideApp={false}
      >
        {/* Tooltip component for skills */}
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
            {/* Github link if link've data in db */}
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

            {/* Website link if link've data in db */}
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

/**
 * PropType validation
 */
Cards.propTypes = {
  projectData: PropTypes.object.isRequired,
  display: PropTypes.bool
}
