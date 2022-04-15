import React from 'react'
import TodoItem from './Todoitem'
const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">ToDos List</h3>
      {props.todo.length===0?"Hurray!! You have completed all the work ,No todos left": props.todo.map((todos)=>{  //how to add a for loop in react? use map , if you wants to return more than one thing enclose it in empty tags
        return<> <TodoItem todo={todos} key={todos.sno} ondelete={props.delete} /> 
        <hr/></> //why key is required ? just it was throwing a warning thats why only
        //not needed to include key
      })
      }
     { /*<TodoItem todo={props.todo[1]} />*/}
      
      
    </div>
  )
}

export default Todos

