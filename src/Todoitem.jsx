import React from 'react'

const TodoItem = ({todo,ondelete})=>{
  return (
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className="btn btn-danger" onClick={()=>ondelete(todo)}>Delete</button>  {/*shortcut to use button is button.btn.btn-danger */}
    {/*if we simply call ondelete function with parameter todo , it will be called before the button got clicked and every time the page relaoded it will be called
    but we wants to call it only on the on click event , for that make a arrow function and pass it.*/}
    
    </div>
  )
}

export default TodoItem
