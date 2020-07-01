
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const hook = () => {
    console.log('loading country data')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }
  useEffect(hook, [])
 
  const handleSearchWordInputChange = (event) => {
    console.log('new searchWord input is:', event.target.value)
    setSearchWord(event.target.value)
  }

  const showValidCountries = () => {
    var cl = allCountries.filter(function (country) {
      return country.name.toUpperCase().includes(searchWord.toUpperCase())
    })
    if (cl.length > 10) {
      return <p>Too many matches, specify filter</p>
    } else if (cl.length === 1) {
      const c = cl[0]
      var languages = c.languages
      console.log('languages:', languages)
      var list = languages.map(l => <li key={l.name}>{l.name}</li>)
      return (
        <div>
            <h2 >{c.name}</h2>
            <p>capital: {c.capital}</p>
            <p>population: {c.population}</p>
            <h3>languages:</h3>
            <ul>
            {list}
            </ul>
            <img width="150" height="100" src={c.flag}></img>
        </div>
      )
    } else {
      var list = cl.map(c => <p key={c.name}>{c.name}</p>)
      return list
    }
  }

  return (
    <div>
        <h2>Maiden tiedot</h2>
        <h4>find countries <input value={searchWord} onChange={handleSearchWordInputChange} /></h4>
        <div>{showValidCountries()}</div>
        
    </div>
  )
}

export default App;
