import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const fetchData = () => {
    fetch('https://api.publicapis.org/categories')
      .then((response) => {
        console.log('response: ', response)
        return response.json()
      })
      .then((data) => {
        console.log('data: ', data.categories)
        setData(data.categories)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filterCat = (input) => {
    return console.log(data.categories.filter((data) => (data = input)))
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            setInput(filterCat(e.target.value))
          }
        }}
      />
      <div>result: {input}</div>
      {data.length > 0 && (
        <ul className="grid-container">
          {data.map((item) =>
            item == input ? (
              <tbody>
                <div>{input}</div>
              </tbody>
            ) : (
              <tbody>
                <div>{item}</div>
              </tbody>
            )
          )}
        </ul>
      )}
    </div>
  )
}

export default App
