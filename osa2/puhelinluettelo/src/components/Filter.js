import React from 'react'

const Filter = ({ persons, searchWord , handleSearchWordChange }) => {
    const personsToShow = persons.filter(person => person.name.toUpperCase().includes(searchWord.toUpperCase()))
    
    return (
        <div>
            <div>Filter: <input value={searchWord} onChange={handleSearchWordChange} /> </div>
            <ul>
                {personsToShow.map((person, i) => <div key={person.name}> {person.name} {person.number}</div>)}
            </ul>
        </div>
    )
}


export default Filter