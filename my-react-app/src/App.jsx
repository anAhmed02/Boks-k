import React, { useState, useEffect } from 'react'
import './styles/main.scss'
import SearchResults from "./Component/SearchResults.jsx"


function App() {
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    // Søket kan bare komme opp om det er 3 elle fler tegn
    if (query.length >= 3) {
      const fetchData = async () => {
        const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`)
        const data = await response.json()
        setBooks(data.docs)
      }

      fetchData().catch(console.error)
    } else {
      // Hvis søkestrengen er under tre tegn nullstilles boklisten 
      setBooks([])
    }
  }, [query]) // Oppdatere seg etter endring i søkefeltet 

  return (
    <div className="App">
      <header>
        <h1>Book Finder</h1>
      </header>
      <main>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Minimum three characters..."
          className="search-input" // Bruker en klasse for stilsetting
        />
        <SearchResults books={books} />
      </main>
    </div>
  )
}

export default App
