import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const fetchData = () => {
    fetch('https://api.publicapis.org/categories')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setData(data.categories)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      {data.length > 0 && (
        <ul className="grid-container">
          {data.find((element) => element == input) ? (
            <div>Result: {input}</div>
          ) : (
            data.map((item) => (
              <tbody id="tbody">
                <div>{item}</div>
              </tbody>
            ))
          )}
        </ul>
      )}
    </div>
  )
}

export default App
