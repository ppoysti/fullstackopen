import React from 'react';

const Header = props => {
  return (
    <h1>{props.title}</h1>
  );
};

const Content = props => {
  return (
    props.parts.map((prop) => (  
      <p>{prop.name} {prop.exercises}</p>
    ))
  );
};

const Total = props => {
  let totalExercises = 0;

  props.parts.map((prop) => (  
    totalExercises += prop.exercises
  ));

  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
