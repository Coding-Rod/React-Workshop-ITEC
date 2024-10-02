export function TodoList ({ todos, setCompleted }) {
    return (
        <div className="todo-list">
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed todo' : 'todo'}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => setCompleted(todo.id)}
                        />
                        <p>
                        {todo.text}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}