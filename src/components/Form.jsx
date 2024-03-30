import React, { useState } from 'react'

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
    
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        const isEmpty = str => !str.trim().length;

        if (isEmpty(inputText))
        {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            },1000)
        }
        else
        {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false)
            }, 1000);
            setTodos([
                { text: inputText, completed: false, id: Math.random() },
                ...todos
            ]); 
            
        }
        setInputText("");
    }

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
        
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
   
  return (
    <form>
        <div className="search">
            <input type="text" className="todo-input" placeholder="Add..." value={inputText} onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
          
          <div className="alert-wrapper">
              {alertSuccess ? <div className="alert-success">
                <div>Ekleme Başarılı.</div>
              </div> : ""}
            
              {alertWarning ? <div className="alert-warning">
                <div>Input alanı boş geçilemez!</div>
            </div> : ""}
            
        </div>
    </form>
  )
}

export default Form