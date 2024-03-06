import PropTypes from 'prop-types'

/**
 * FilterBar component to display filter buttons
 * @param {Object} props - The component props
 * @param {Array} props.activFilter - The active filters
 * @param {Function} props.setActivFilter - Function to update active filters
 * @param {Array} props.filterList - The list of filter options
 * @returns {JSX.Element} - JSX element representing the filter bar
 */
function FilterBar({ activFilter, setActivFilter, filterList }) {
  // Style for setting maximum number of columns in the grid
  const gridMaxCol = {
    '--bs-columns': `${filterList.length}` // Number of columns based on the length of filterList
  }

  // Function to handle click event on filter buttons
  const handleClick = (e) => {
    const filterValue = e.target.value
    if (!activFilter.includes(filterValue)) {
      // Adding filterValue to activFilter if it's not already present
      setActivFilter([...activFilter, filterValue])
    } else {
      // Removing filterValue from activFilter if it's already present
      setActivFilter([
        ...activFilter.filter((element) => element !== filterValue)
      ])
    }
  }

  // Rendering the filter bar component
  return (
    <>
      {/* Filter bar */}
      <div className="filterbar" style={gridMaxCol}>
        {/* Mapping over filterList to create filter buttons */}
        {filterList.map((value, key) => (
          <button
            className={`filterbar-btn btn ${
              activFilter.includes(value) ? 'btn-primary' : 'btn-light '
            }`}
            key={Date.now() + key}
            value={value}
            onClick={handleClick}
          >
            {value} {/* Displaying filter option */}
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
