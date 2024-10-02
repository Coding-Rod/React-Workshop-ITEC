export function ClearCompleted ({ clearCompleted }) {
    return (
        <div className="clear-completed">
            <button
                onClick={clearCompleted}
            >
                Clear Completed
            </button>
        </div>
    )
}