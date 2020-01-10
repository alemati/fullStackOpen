import React, { useState } from 'react'

const Filter = ({ persons }) => {
    const [searchWord, setSearchWord] = useState('')
    const handleSearchWordInputChange = (event) => {
        console.log('new searchWord input is:', event.target.value)
        setSearchWord(event.target.value)
    }
    const showFilteredPersons = () => {
        var p = persons.filter(function (person) {
            return person.name.toUpperCase().includes(searchWord.toUpperCase())
        })
        
        var p2 = p.map(per => <p key={per.name}>{per.name} {per.number}</p>)
        return p2
    }
    return (
        <div>
            <h4>Name search: <input value={searchWord} onChange={handleSearchWordInputChange} /></h4>
            {showFilteredPersons()}
        </div>
    )
}


export default Filter