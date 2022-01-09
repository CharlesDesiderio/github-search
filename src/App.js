import { useState } from 'react'

import SearchBar from './components/SearchBar'
import Results from './components/Results'

import styles from './App.module.css'

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

    fetch(`https://api.github.com/search/users?q=${query}&page=${nextPage}&per_page=15`)
    .then(res => res.json())
    .then(data => {
      setResults(data.items)
      setTotalPages(Math.ceil(data.total_count / 15))
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
    <div className={styles.App}>
      <SearchBar runSearch={runSearch} setQuery={setQuery} />

      <Results data={results} />

        { totalPages > 0 ? <div className={styles.pages}><span className={styles.chevron} onClick={decPage}> ◀ </span>Page {currentPage} of {totalPages} <span className={styles.chevron} onClick={incPage}> ▶ </span></div> : '' }

    </div>
  )
}

export default App