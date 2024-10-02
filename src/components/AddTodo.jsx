import { useState } from "react"

export function AddTodo () {
    const [todo, setTodo] = useState('') // Works as getter and setter

    const handleAddTodo = (value) => {
        setTodo(value) // Executes the setter
    }

    return (
        <div className="add-todo">
            <input 
                type="text" 
                placeholder="Add a new todo..." 
                value={todo} 
                onChange={(e) => handleAddTodo(e.target.value)}
            />
            {/* <span>{todo}</span> */}
            <button>Add</button>
        </div>
    )
}