import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Footer from "./Footer";
import Todos from "./Todos";
import TodoItem from "./Todoitem";
import About from "./About";
import React, { useEffect, useState } from "react";

import Addtodo from "./Addtodo";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("I am getting deleted of todo", todo);
    // let idx=todos.indexOf(todo)
    // todos.splice(idx,1);    //  in react splice doesn't work , dom will not get updated like this , to do this we have to use state hooks

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      // for changing the newly entered title and desc , basically updating title and desc
      sno: sno,
      title: title,
      desc: desc,
    };
    settodos([...todos, mytodo]);
    console.log(mytodo);
  };

  const [todos, settodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    //<Section/>
    
    <div className="Learning">
      <BrowserRouter>
      
      <Header title="My todos List" searchbar={false} />
      
      
      <Routes>
            <Route path="/" element= 
            { <>
             <Addtodo addtodo={addtodo} />
             <Todos todo={todos} delete={ondelete} /> 
            </>
            }/>
           <Route path="/about" element={<About/>}/> 
     </Routes>
      <Footer />
     
      
         

      </BrowserRouter>  
      
    </div>
    
    
  );
}

export default App;
{/*
<Router>
        <Header title="My todos List" searchbar={false} />
      <Routes>

        <Route path="/"element={
            <>
            <Addtodo addtodo={addtodo} />
            <Todos todo={todos} delete={ondelete} /> 
            </>
          }/>
          <Route path="/about" element={<About/>}/>

          </Routes>
       
        
         <Footer />
         
        </Router>*/}
