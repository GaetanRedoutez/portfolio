import { useState } from 'react'

function FilterBar({ data, updateData, filterList, filter }) {
  const [activFilter, setActivFilter] = useState([])

  console.log(data[0].skills[0].name)

  const handleChange = (e) => {
    const updatedFilter = [...activFilter, e.target.value]
    setActivFilter(updatedFilter)
  }

  const handleReset = () => {
    setActivFilter([])
  }

  return (
    <>
      <div>
        Filtrez les projets par compétences :{' '}
        <select onChange={handleChange}>
          <option value="">Tous</option>
          {filterList.map((value, key) => (
            <option key={Date.now + key} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        {activFilter.map((value, key) => (
          <span key={Date.now() + key}>{value}</span>
        ))}
      </div>
      <button onClick={handleReset}>Reset filter</button>
    </>
  )
}

export default FilterBar
