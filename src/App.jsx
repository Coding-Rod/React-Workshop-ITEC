import './App.css'

import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Filters } from './components/Filters'
import { ClearCompleted } from './components/ClearCompleted'

import { useTodos } from './hooks/useTodos'

function App() {
  const { todos, addTodo, setCompleted, clearCompleted, setFilter } = useTodos() 

  return (
    <>
      <div className="card">
        <div className="title">TODO App</div>
        <div className="content">
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} setCompleted={setCompleted} />
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
