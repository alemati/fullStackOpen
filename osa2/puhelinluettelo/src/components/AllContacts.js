import React, { useState } from 'react'
import contactService from '../services/contacts'
import Notification from './Notification'

const AllContacts = ({ persons, setPersons }) => {

    const [errorMessage, setErrorMessage] = useState(null)

    const deletePerson = (event, person) => {
        event.preventDefault()
        if (window.confirm(`Delete ${person.name} ?`)) {
            contactService
                .personToDelete(person.id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
                .catch(() => {
                })

                showMessage(`${person.name} was deleted!`)
        }
    }

    const showMessage = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 4000)
    }

    const showContacts = () => {
        var list = persons.map(person => <p key={person.name}>{person.name} {person.number}
            <button onClick={event => deletePerson(event, person)}>Delete!</button> </p>)
        return list
    }
    return (
        <div>
            <Notification message={errorMessage} />
            {showContacts()}
        </div>
    )
}

export default AllContacts
