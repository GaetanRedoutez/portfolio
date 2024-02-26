import PropTypes from 'prop-types'
import { Tooltip } from 'react-tooltip'
import Loader from '../Loader'

/**
 *
 * @param {Object} props
 * @param {string} props.title - Skills title.
 * @param {Array} props.skills - Skills from data or database.
 * @param {string} props.state - State to display.
 * @returns {JSX.Element}
 */
function Skills({ title, skills, state }) {
  const stateToFilter = state
  let filteredSkill = []
  if (skills !== undefined) {
    filteredSkill = skills.filter((data) => data.state === stateToFilter)
  }

  const pathToImage = 'assets/images/skills/'
  const extension = '.png'

  return (
    <>
      {skills !== undefined ? (
        <div className="container">
          <h2 className="mt-5 d-flex justify-content-center align-items-center">
            {title}
          </h2>
          <div className="skillgrid">
            {filteredSkill.map((value) => (
              <div
                className="skillgrid-item"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={value.name}
                key={Date.now() + value._id}
              >
                <img
                  src={`${pathToImage}${value.name}${extension}`}
                  alt=""
                  className="skillgrid-item--icon"
                />
                <Tooltip id="my-tooltip" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
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
