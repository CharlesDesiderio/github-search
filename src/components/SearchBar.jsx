import { useState } from 'react'

const SearchBar = () => {

const [searchInput, setSearchInput] = useState('')

const handleChange = (event) => {
  setSearchInput(event.target.value)
}

const runSearch = () => {
  console.log(`searching for ${searchInput}`)
  setSearchInput('')
}

  return (
    <div>
    <input value={searchInput} onChange={handleChange} />
    <button onClick={runSearch}>Search</button>
    </div>
  )
}

export default SearchBar