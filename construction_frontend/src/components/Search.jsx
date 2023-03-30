import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'

function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearchQuery = (event) => {
    event.preventDefault()
    const filteredResults = props.construction.filter((construction) =>
      construction.job.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(filteredResults)
  }

  return (
    <>
      <form onSubmit={handleSearchQuery} className='searchForm'>
        <Form.Label htmlFor='job' className='searchBar'>
          {' '}
          search job name: {' '}
        </Form.Label>{' '}
        <br />
        <input
          type='text'
          name='job'
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className='searchControl'
        />
        <br />
        <input type='submit' className='submitBtn' />
      </form>
        {searchResults.map((construction) => (
          <li key={construction.id}>{construction.job}</li>
        ))}

    </>
  )
}

export default SearchBar