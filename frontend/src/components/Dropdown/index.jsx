import PropTypes from 'prop-types'
import { useState } from 'react'

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {JSX.Element} props.content
 * @returns {JSX.Element}
 */
function Dropdown({ title, content }) {
  const [isShow, setIsShow] = useState(false)

  const handleClick = () => {
    setIsShow(!isShow)
  }

  const arrowStyle = isShow
    ? {
        transform: 'rotate(180deg)'
      }
    : null

  return (
    <>
      <div className="grid mt-4 mx-5 dropdown">
        <div className="g-col-1"></div>
        <div className="g-col-10 dropdown-collapse">
          <button
            className="btn dropdown-collapse--btn d-flex align-items-center justify-content-between btn-light"
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
      {isShow ? (
        <div className="grid mt-2 mx-5 dropdown ">
          <div className="g-col-1"></div>
          <ul className="g-col-10 dropdown-content justify">{content}</ul>
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
