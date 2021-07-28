import React from 'react';

const Form = ({ setInputText,todos,setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault(); //to prevent refresh when clicking enter key or submit button
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()* 1000 }
        ])
        setInputText("");
    };

    
    const statusHandler = (e) => {
        setStatus(e.target.value); 
    }
    return (
        <div>
            <form>
                <input placeholder="Get started" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                  </div>
             </form>
    </div>
    );
};

export default Form;