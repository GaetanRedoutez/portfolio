import PropTypes from 'prop-types'

/**
 * @param {Object} props
 * @param {string} props.data
 * @param {Object} props.updateData
 * @param {string} props.filterList
 * @returns {JSX.Element}
 */
function FilterBar({ activFilter, setActivFilter, filterList }) {
  //FIXME Disable l'option si elle a déjà été selectionné
  const handleChange = (e) => {
    const filterValue = e.target.value
    if (!activFilter.includes(filterValue)) {
      setActivFilter([...activFilter, filterValue])
    }
  }
  const handleClearOne = (e) => {
    const filterToClear = e.target.value
    const index = activFilter.indexOf(filterToClear)
    if (index > -1) {
      let updatedFilter = [...activFilter]
      updatedFilter.splice(index, 1)
      setActivFilter(updatedFilter)
    }
  }

  const handleReset = () => {
    setActivFilter([])
  }

  const gridMaxCol = {
    '--bs-columns': '6'
  }

  return (
    <>
      {/* <div className=" g-col-5"> */}
      <select onChange={handleChange} value="" className="form-select g-col-3">
        <option value="" disabled>
          Selectionner un filtre
        </option>
        {filterList.map((value, key) => (
          <option key={Date.now() + key} value={value}>
            {value}
          </option>
        ))}
      </select>
      {/* </div> */}
      <button className="g-col-1" onClick={handleReset}>
        Reset filter
      </button>
      <div className="g-col-8">
        <div className="grid text-center" style={gridMaxCol}>
          {activFilter.map((value, key) => (
            <button
              className="g-col-1 btn btn-secondary text-light"
              key={Date.now() + key}
              onClick={handleClearOne}
              value={value}
            >
              {value} ×
            </button>
          ))}
        </div>
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
