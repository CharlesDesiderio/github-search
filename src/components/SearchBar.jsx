import { useState } from 'react'

const SearchBar = ({ runSearch, setQuery }) => {

const [searchInput, setSearchInput] = useState('')

const handleChange = (event) => {
  setSearchInput(event.target.value)
  setQuery(event.target.value)
}

  return (
    <div>
    <input value={searchInput} onChange={handleChange} />
    <button onClick={runSearch}>Search</button>
    </div>
  )
}

export default SearchBar