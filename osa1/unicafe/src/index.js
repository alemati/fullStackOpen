import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)
const Statistic = ({ text, value, info }) => (
    <p>{text} {value} {info}</p>
)

const Statistics = ({ good, bad, neutral }) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                No feedback given
          </div>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <Statistic text='Good:' value={good} />
            <Statistic text='Neutral:' value={neutral} />
            <Statistic text='Bad:' value={bad} />
            <Statistic text='All:' value={good + bad + neutral} />
            <Statistic text='Average:' value={((good * 1) + (-1 * bad) + (neutral * 0)) / (good + bad + neutral)} />
            <Statistic text='Positive:' value={good / (good + bad + neutral)} info='%' /> 
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const positiveGrade = () =>
        setGood(good + 1)

    const negativeGrade = () =>
        setBad(bad + 1)

    const neutralGrade = () =>
        setNeutral(neutral + 1)

    return (
        <div>
            <h1>Give feedback</h1>
            <div>
                <Button onClick={positiveGrade} text='good' />
                <Button onClick={neutralGrade} text='neutral' />
                <Button onClick={negativeGrade} text='bad' />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)