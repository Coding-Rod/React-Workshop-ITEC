import { useState } from 'react'
import { useEffect } from 'react'

export function useTodos() {
  const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])
  const [filter, setFilter] = useState('all') // all, active, completed
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (todo) => {
    const newTodos = [...todos, { id: todos.length + 1, text: todo, completed: false }]
    setTodos(newTodos) // This is async
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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return { todos: filteredTodos, addTodo, setCompleted, clearCompleted, setFilter }
}