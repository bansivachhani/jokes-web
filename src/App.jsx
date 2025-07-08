import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes') // change if deployed
      .then((response) => {
        setJokes(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError('Could not fetch jokes. Please try again.')
        setLoading(false)
      })
  }, [])



  return (
    <div className="container">
      <h1> Jokes App by Bansi</h1>
      <p>Total Jokes: <strong>{jokes.length}</strong></p>

      {loading && <p className="loading">Loading jokes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="joke-list">
        {jokes.map((joke) => (
          <div key={joke.id} className="joke-card">
            <h3>#{joke.id} - {joke.category}</h3>
            <p>{joke.joke}</p>
          </div>
        ))}
      </div>

      <footer>Created with ❤️ by Bansi Vachhani</footer>
    </div>
  )
}

export default App
