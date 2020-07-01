import React from 'react'

const NewContact = ({newName , newNumber, handleNumberChange, handleNameChange, addNewPerson }) => {
    return (
        <div>
            <form>
                <h3>Add new contact</h3>
                <div>name: <input value={newName} onChange={handleNameChange} /> </div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div> <button type="submit" onClick={addNewPerson}>add</button> </div>
            </form>
        </div>
    )
}


export default NewContact