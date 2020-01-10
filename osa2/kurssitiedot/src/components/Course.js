import React from 'react'

const Header = props =>
    <h1>{props.course}</h1>

const Total = props => {
    const total = props.parts.reduce(function (sum, part) {
        return sum + part.exercises
    }, 0)

    return <p>total of {total} exercises</p>
}

const Part = props =>
    <p>{props.part.name} {props.part.exercises}</p>

const Content = props => {
    return (
        <div>
            {props.parts.map(part => <Part part={part} key={part.id} />)}
        </div>
    )
}

const Course = props => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course