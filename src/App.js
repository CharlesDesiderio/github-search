import { useState, useRef } from 'react'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

const App = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const runSearch = (direction) => {
    let nextPage = currentPage

    if (direction === 'up') {
      nextPage++
    }
    if (direction === 'down') {
      nextPage--
    }

    fetch(`https://api.github.com/search/users?q=${query}&page=${nextPage}`)
    .then(res => res.json())
    .then(data => {
      setResults(data.items)
      console.log('page', currentPage)
      setTotalPages(Math.ceil(data.total_count / 30))
      setCurrentPage(nextPage)
    })
  }

  const decPage = () => {
    if (currentPage > 1) {
      runSearch('down')
    }
  }

  const incPage = () => {
    if (currentPage < totalPages) {
      runSearch('up')
    }
  }

  return (
    <div>
      <SearchBar runSearch={runSearch} setQuery={setQuery} />

      <Results data={results} />

      { totalPages > 0 ? <div><span onClick={decPage}> ◀ </span>Page {currentPage} of {totalPages} <span onClick={incPage}> ▶ </span></div> : '' }

    </div>
  )
}

export default App