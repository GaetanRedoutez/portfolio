import PropTypes from 'prop-types'
import { Tooltip } from 'react-tooltip'
import Loader from '../Loader'

/**
 * Skills component to display skills with tooltips
 * @param {Object} props - The component props
 * @param {string} props.title - The title of the skills section
 * @param {Array} props.skills - The list of skills to display
 * @param {string} props.state - The state of skills to display
 * @returns {JSX.Element} - JSX element representing the skills section
 */
function Skills({ title, skills, state }) {
  const stateToFilter = state
  let filteredSkill = []

  // Filtering skills based on state
  if (skills !== undefined) {
    // If state is empty, display all skills
    if (state === '') {
      filteredSkill = skills
    }
    // Filter skills based on state
    filteredSkill = skills.filter((data) => data.state === stateToFilter)
  }

  // Path to images and extension
  const pathToImage = 'assets/images/skills/'
  const extension = '.png'

  // Rendering the Skills component
  return (
    <>
      {/* Display loader if skills data is not available */}
      {skills !== undefined ? (
        <div className="container">
          {/* Display title if provided */}
          {title !== '' ? (
            <h2 className="mt-5 d-flex justify-content-center align-items-center">
              {title}
            </h2>
          ) : null}

          {/* Grid layout for skills */}
          <div className="skillgrid">
            {/* Mapping over filtered skills */}
            {filteredSkill.map((value) => (
              <div
                className="skillgrid-item"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={value.name}
                key={Date.now() + value._id}
              >
                {/* Skill icon */}
                <img
                  src={`${pathToImage}${value.name}${extension}`}
                  alt=""
                  className="skillgrid-item--icon"
                />

                {/* Tooltip */}
                <Tooltip id="my-tooltip" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader /> // Display loader while skills data is loading
      )}
    </>
  )
}

export default Skills

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array,
  state: PropTypes.string.isRequired
}
