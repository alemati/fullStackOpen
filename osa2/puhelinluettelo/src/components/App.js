// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import NewContact from './NewContact'
import AllContacts from './AllContacts'
import contactService from '../services/contacts'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    contactService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter persons={persons} />

      <h4>Add new contact</h4>
      <NewContact persons={persons} setPersons={setPersons} />

      <h4>Numbers:</h4>
      <AllContacts persons={persons} setPersons={setPersons} />
    </div>
  )

}

export default App
