import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import electronics from '../data/topics.json'
import webdev from '../data/webdev.json'
import programming from '../data/programming.json'
import ecommerce from '../data/ecommerce.json'

const categoryMap = {
  electronics,
  webdev,
  programming,
  ecommerce,
}

const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState([])

  useEffect(() => {
    const filtered = []

    for (const [category, topics] of Object.entries(categoryMap)) {
      topics.forEach(topic => {
        if (topic.title.toLowerCase().includes(query.toLowerCase())) {
          filtered.push({ ...topic, category })
        }
      })
    }

    setResults(filtered)
  }, [query])

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Search results for: <span className="text-blue-600">{query}</span></h1>

      {results.length === 0 ? (
        <p>No topics found.</p>
      ) : (
        <div className="space-y-4">
          {results.map(item => (
            <Link
              key={`${item.category}-${item.slug}`}
              to={`/${item.category}/${item.slug}`}
              className="block p-4 bg-gray-100 hover:bg-gray-200 rounded"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
