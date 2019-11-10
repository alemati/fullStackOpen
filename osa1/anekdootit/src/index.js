import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const lenght = anecdotes.length
    const [votes, setVotes] = useState(Array.apply(null, new Array(lenght)).map(Number.prototype.valueOf, 0))

    const nextJoke = () => {
        var randomNumder = Math.floor((Math.random() * 100) + 1)    // taking random number between 1 and 100
        var randomIndex = randomNumder % lenght                     // and then modulo anecdotes number in array
        setSelected(selected - selected + randomIndex)              // result is number between 0 and arrayLenght-1
        console.log('index of new joke is', randomIndex)
    }
    const voteJoke = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
        console.log('joke under index', selected, " received a vote")
    }
    var indexOfMostPopular = votes.indexOf(Math.max(...votes));
    return (
        <div>
            {props.anecdotes[selected]}
            <p>has {votes[selected]} votes</p>
            <div>
                <Button onClick={voteJoke} text='vote for this joke' jokeIndex={selected} />
                <Button onClick={nextJoke} text='next joke' />
            </div>
            <h2>Anecdote with most votes is</h2>
            {props.anecdotes[indexOfMostPopular]}
            <p>has {votes[indexOfMostPopular]} votes</p>
            
        </div>
    )
}

const anecdotes = [
    /* 0 */'If it hurts, do it more often',
    /* 1 */'Adding manpower to a late software project makes it later!',
    /* 2 */'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    /* 3 */'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    /* 4 */'Premature optimization is the root of all evil.',
    /* 5 */'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)