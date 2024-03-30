
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    //getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler(todos);
    //saveLocalTodos();
  }, [todos, status])//eslint-disable-line
  

  useEffect(() => {
    const getLocalTodos = JSON.parse(localStorage.getItem("todos"));
    if (getLocalTodos) setTodos(getLocalTodos);
  }, []);
  
  useEffect(() => {
    if(todos.length) { 
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
 

  

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
    
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //save to local

  /*const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }*/

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}/>
      
    </div>
  );
}

export default App;
