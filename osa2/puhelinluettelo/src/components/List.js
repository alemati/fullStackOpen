import React from 'react'

const List = ({ persons, deletePerson }) => {
    return (
        
        <div>
            <h3>Numbers</h3>
            {persons.map(person => <div key={person.name}>{person.name} {person.number}    
            <button name={person.name} onClick={() => deletePerson(person.id)}>poista</button>
            
            </div>)}
            
        </div>
    )
}

export default List