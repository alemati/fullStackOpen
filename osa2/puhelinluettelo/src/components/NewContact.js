import React, { useState } from 'react'
import contactService from '../services/contacts'
import Notification from './Notification'

const NewContact = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)

    const handleNameInputChange = (event) => {
        console.log('new name input is:', event.target.value)
        setNewName(event.target.value)
    }
    const handleNumberInputChange = (event) => {
        console.log('new number input is:', event.target.value)
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        console.log('addPerson was called:')
        var h = persons.filter(function (person) {
            return person.name === newName
        })
        if (h.length > 0) {
            event.preventDefault()
            window.alert(`${newName} is already added to phonebook`);


            // const oldPerson = persons.find(person => person.name === newName)
            // const newPerson = { name: newName, 
            //                     number: newNumber }


            // if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
            //     const changeOld = updatedPerson => {
            //         setPersons(persons.map(person => person.id !== oldPerson.id ? person : updatedPerson))
            //         setNewName('')
            //         setNewNumber('')
                    
            //     }
            //     contactService
            //         .update(oldPerson.id, newPerson)
            //         .then(changeOld)
            //         .catch(() => {})
            // }


        } else {
            event.preventDefault()
            const personObject = {
                name: newName,
                number: newNumber
            }
            const oldName = newName
            contactService
                .create(personObject)
                .then(response => {
                    setPersons(persons.concat(personObject))
                    showMessage(`Added ${oldName}`)
                    setNewName('')
                    setNewNumber('')
                })

            console.log('new person was added:', personObject)
            // setErrorMessage(personObject.newName)
        }
    }

    const showMessage = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 4000)
      }

    return (
        <div>
            <Notification message={errorMessage} />
            <form onSubmit={addPerson}>
                <div>
                    <div>name: <input value={newName} onChange={handleNameInputChange} /></div>
                    <div>number: <input value={newNumber} onChange={handleNumberInputChange} /></div>
                </div>
                <div>
                    <button type="submit" >add</button>
                </div>
            </form>
        </div>
    )
}
export default NewContact