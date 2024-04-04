import React from 'react'
import BookCard from './bookcard.jsx'

// Komponent for å vise søkeresultater eller default liste over bøker
function SearchResults({ books }) {
  return (
    <section className="search-results">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </section>
  )
}

export default SearchResults
