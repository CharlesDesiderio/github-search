import { useState } from 'react'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

const App = () => {

  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const runSearch = (query) => {
    fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(data => {
      setResults(data.items)
      setTotalPages(Math.ceil(data.total_count / 30))
    })
  }

  return (
    <div>
      <SearchBar runSearch={runSearch} />
      <Results data={results} />
      {totalPages}
    </div>
  )
}

export default App