export function TodoCard(props) {
    const { todo, handleDeleteTodo, todoIdx, handleUpdateTodo } = props

    return (
        <div className={"card todo-item" + (todo.complete ? " todo-complete" : "")}> {/* Added class for completed todos */}
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleUpdateTodo(todoIdx)
                }} disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIdx)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}