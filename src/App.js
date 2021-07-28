import React, { useState, useEffect } from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Form from './components/Form';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filteredTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos(); //retrieve saved todo list from localStorage
  }, []);
  
  useEffect(() => {
    filterHandler(); //filters task which is completed or uncompleted
    saveLocalTodos(); //saving todo in localStorage
  }, [todos, status]);




  //to check what is completed or not completed in in single view insted of reading all together
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));       
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));       
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
// saving todo in localStorage
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    };
//retrieve saved todo list from localStorage
    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal)
        }
    }


  return (
    <div className="App">
      <header>
        <h1>To-Do</h1>
      </header>
      <Form //input field for todo and filter to check task completed or uncompleted.
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus} 
      />
      <Todolist //list of todos, 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
}

export default App;
 