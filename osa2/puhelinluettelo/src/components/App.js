import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import NewContact from './NewContact'
import List from './List'
import personService from '../services/persons'
import Notification from './Notification.js';

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchWord, setNewSearchWord] = useState('')
  const [persons, setPersons] = useState([])
  const [notification, setNotification] = useState(null);

  const makeNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const handleSearchWordChange = (event) => {
    console.log('new searchWord input is:', event.target.value)
    setNewSearchWord(event.target.value)
  }

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      if (window.confirm(`${newPerson.name} is already added to phonebook, 
        do you want to replace phone number with a new one?`)) {

        const dataBasePerson = persons.find(p => p.name === newName)
        personService
          .update(dataBasePerson.id, newPerson)
          .then(changedPerson => {
            setPersons(persons.map(person => person.id !== dataBasePerson.id ? person : changedPerson))
            setNewName('')
            setNewNumber('')
            makeNotification(`Phone number of ${changedPerson.name} was updated`)
          })
      }
    } else {
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
          makeNotification(`${newPerson.name} was now added`)
        })
    }
  }

  const deletePerson = (id) => {
    const p = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${p.name}?`)) {
      personService.remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          makeNotification(`${p.name} is now deleted`)
          
        }).catch(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  console.log('newName value is: ', newName)
  console.log('newNumber value is: ', newNumber)
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter persons={persons} searchWord={searchWord} handleSearchWordChange={handleSearchWordChange} />
      <br />

      <NewContact newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} addNewPerson={addNewPerson} />
      <br />
      <List persons={persons} deletePerson={deletePerson} />

    </div>
  )

}

export default App