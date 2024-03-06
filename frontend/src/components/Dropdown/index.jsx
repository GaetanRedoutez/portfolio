import PropTypes from 'prop-types'
import { useState } from 'react'

/**
 * Dropdown component to display a collapsible content
 * @param {Object} props - The component props
 * @param {string} props.title - The title of the dropdown
 * @param {JSX.Element} props.content - The content of the dropdown
 * @returns {JSX.Element} - JSX element representing the dropdown
 */
function Dropdown({ title, content }) {
  // State variable to track whether dropdown content is shown or not
  const [isShow, setIsShow] = useState(false)

  // Function to handle click event on the dropdown button
  const handleClick = () => {
    setIsShow(!isShow)
  }

  // Style for the arrow icon based on the dropdown state
  const arrowStyle = isShow
    ? {
        transform: 'rotate(180deg)' // Rotate arrow down when content is shown
      }
    : null

  // Rendering the dropdown component
  return (
    <>
      {/* Dropdown button */}
      <div className="grid mt-4 dropdown">
        <div className="g-col-1"></div>
        <div className="g-col-10 dropdown-collapse">
          <button
            className={`btn dropdown-collapse--btn ${
              isShow ? 'btn-secondary' : 'btn-light'
            }`}
            onClick={handleClick}
          >
            <div>{title}</div>
            <img
              src="assets\images\icons\caret-down.svg"
              alt=""
              style={arrowStyle}
            />
          </button>
        </div>
      </div>

      {/* Dropdown content */}
      {/* Displaying content only if isShow is true */}
      {isShow ? (
        <div className="grid mt-2 dropdown ">
          <div className="g-col-1"></div>
          <ul className="g-col-10 dropdown-content p-0">{content}</ul>
        </div>
      ) : null}
    </>
  )
}

export default Dropdown

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array
}
