import PropTypes from 'prop-types'
import { Tooltip } from 'react-tooltip'

/**
 * @param {Object} props
 * @param {string} props.title - Skills title.
 * @param {Object} props.skill - Skills from data or database.
 * @param {string} props.state - State to display.
 * @returns {JSX.Element}
 */
function Skills({ title, skill, state }) {
  const skillArray = Object.entries(skill)
  const stateToFilter = state
  const filteredSkill = skillArray.filter(
    (data) => data[1].state === stateToFilter
  )

  const pathToImage = 'assets/images/skills/'
  const extension = '.png'

  return (
    <div className="container">
      <h2 className="mt-5 d-flex justify-content-center align-items-center">
        {title}
      </h2>
      <div className="skillgrid">
        {filteredSkill.map(([key, value]) => (
          <div
            className="skillgrid-item"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={value.name}
            key={Date.now() + key}
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
  )
}

export default Skills

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  skill: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}
