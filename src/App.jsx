import './App.css'

import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Filters } from './components/Filters'
import { ClearCompleted } from './components/ClearCompleted'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all') // all, active, completed
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (todo) => {
    const newTodos = [...todos, { id: todos.length + 1, text: todo, completed: false }]
    setTodos(newTodos)
  }

  const setCompleted = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  useEffect(() => {
    switch (filter) {
      case 'active':
        setFilteredTodos(todos.filter(todo => !todo.completed))
        break
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed))
        break
      default:
        setFilteredTodos(todos)
    }
  }, [todos, filter]) // When todos or filter change, run this effect

  return (
    <>
      <div className="card">
        <div className="title">TODO App</div>
        <div className="content">
          <AddTodo addTodo={addTodo} />
          <TodoList todos={filteredTodos} setCompleted={setCompleted} />
        </div>
        <div className="footer">
          <Filters setFilter={setFilter} />
          <ClearCompleted clearCompleted={clearCompleted} />
        </div>          
      </div>
    </>
  )
}

export default App
