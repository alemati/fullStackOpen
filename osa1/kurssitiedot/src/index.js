import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course_name={course} />
            <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
            <Total points1={parts[0].exercises} points2={parts[1].exercises} points3={parts[2].exercises} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course_name} </h1>
        </div>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.part1.name} points={props.part1.exercises} />
            <Part part={props.part2.name} points={props.part2.exercises} />
            <Part part={props.part3.name} points={props.part3.exercises} />
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p>{props.part} {props.points}</p>
        </div>
    )
}
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.points1 + props.points2 + props.points3}</p>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))