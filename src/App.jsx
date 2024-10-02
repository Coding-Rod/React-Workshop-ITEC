import './App.css'

import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { Filters } from './components/Filters'
import { ClearCompleted } from './components/ClearCompleted'

function App() {
  
  return (
    <>
      <div className="card">
        <div className="title">TODO App</div>
        <div className="content">
          <AddTodo />
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
