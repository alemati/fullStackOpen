import React from 'react'

const Course = props => {
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name} </h1>
        </div>
    )
}
const Content = props => {
    return (
        <div>
            {props.course.parts.map(part => <Part part={part} key={part.id} />)}
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.part.name} {props.part.exercises}</p>
        </div>
    )
}


const Total = props => {
    const total = props.course.parts.reduce((total, part) => total + part.exercises, 0)
    return <div>Total of {total} exercises</div>
}

export default Course