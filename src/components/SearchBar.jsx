import { useState } from 'react'

const SearchBar = ({ runSearch }) => {

const [searchInput, setSearchInput] = useState('')

const handleChange = (event) => {
  setSearchInput(event.target.value)
}

  return (
    <div>
    <input value={searchInput} onChange={handleChange} />
    <button onClick={() => runSearch(searchInput)}>Search</button>
    </div>
  )
}

export default SearchBar