import React, { useState } from 'react'

const Addtodo = (props) => {
    const[title,settitle]=useState("");   //title ka initial state = empty , same desc ka initial state =empty
    const[desc,setdesc]=useState("");
    // settitle=(title)=>{
    // title=
    // }

  const submit=(e)=>{
        e.preventDefault();  //page will not reload 
        if(!title || !desc)
        alert("Title or description can't be left blank");
       else  props.addtodo(title,desc);

    }
  return (
    <div className="container">
        <h3 className="text-center">Add Todo</h3>
      <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title"  class="form-label">Todo Name</label>   {/*settitle is declared below */}
    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} class="form-control" id="title" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll not let you forget your tasks!!</div>
  </div>
  <div class="mb-3">
    <label for="desc"  class="form-label">Describe your task</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} class="form-control" id="desc"/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default Addtodo
