import './App.css'

import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Filters } from './components/Filters'
import { ClearCompleted } from './components/ClearCompleted'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const newTodos = [...todos, { id: todos.length + 1, text: todo, completed: false }]
    setTodos(newTodos)
  }

  return (
    <>
      <div className="card">
        <div className="title">TODO App</div>
        <div className="content">
          <AddTodo addTodo={addTodo} />
          <TodoList />
        </div>
        <div className="footer">
          <Filters />
          <ClearCompleted />
        </div>          
      </div>
    </>
  )
}

export default App
