import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

/**
 * @param {Object} props
 * @param {string} props.data
 * @param {Object} props.updateData
 * @param {string} props.filterList
 * @returns {JSX.Element}
 */
function FilterBar({ activFilter, setActivFilter, filterList }) {
  // const [isSelected, setIsSelected] = useState(false)

  const gridMaxCol = {
    '--bs-columns': `${filterList.length}`
  }

  const handleClick = (e) => {
    const filterValue = e.target.value
    if (!activFilter.includes(filterValue)) {
      setActivFilter([...activFilter, filterValue])
      // setIsSelected(true)
    } else {
      setActivFilter([
        ...activFilter.filter((element) => element !== filterValue)
      ])
      // setIsSelected(false)
    }
  }

  return (
    <>
      <div className="grid text-center my-5 mx-5" style={gridMaxCol}>
        {filterList.map((value, key) => (
          <button
            className={`g-col-1 btn ${
              activFilter.includes(value) ? 'btn-primary' : 'btn-secondary'
            }`}
            key={Date.now() + key}
            value={value}
            onClick={handleClick}
          >
            {value}
          </button>
        ))}
      </div>
    </>
  )
}

export default FilterBar

FilterBar.propTypes = {
  activFilter: PropTypes.array.isRequired,
  setActivFilter: PropTypes.func.isRequired,
  filterList: PropTypes.array.isRequired
}
