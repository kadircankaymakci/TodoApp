import React from 'react'

function Todo({ text, todo, todos, setTodos }) {
    
    const deleteHandler = () => {
        setTodos(todos.filter((d) => d.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }

  return (
      <div className={`todo ${todo.completed ? "completed":""}`}>
          <button className="complete-btn" onClick={completeHandler}>
              <i className="fas fa-check-circle"></i>
          </button>
          <li className="todo-item">{text}</li>
          <button className="trash-btn" onClick={deleteHandler}>
              <i className="fa fa-minus-circle"></i>
          </button>
      </div>
  )
}

export default Todo