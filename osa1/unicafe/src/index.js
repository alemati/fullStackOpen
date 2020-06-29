import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)
const StatisticLine = ({ text, value, info }) => (
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
            <StatisticLine text='Good:' value={good} />
            <StatisticLine text='Neutral:' value={neutral} />
            <StatisticLine text='Bad:' value={bad} />
            <StatisticLine text='All:' value={good + bad + neutral} />
            <StatisticLine text='Average:' value={((good * 1) + (-1 * bad) + (neutral * 0)) / (good + bad + neutral)} />
            <StatisticLine text='Positive:' value={good / (good + bad + neutral) * 100} info='%' /> 
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