import { useState } from "react"

export function AddTodo ({ addTodo }) {
    const [todo, setTodo] = useState('') // Works as getter and setter

    const handleAddTodo = () => {
        addTodo(todo);
        setTodo('');
    }

    return (
        <div className="add-todo">
            <input 
                type="text" 
                placeholder="Add a new todo..." 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}
            />
            {/* <span>{todo}</span> */}
            <button
                onClick={handleAddTodo}
            >
                Add</button>
        </div>
    )
}