import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab, handleUpdateTodo, handleDeleteTodo } = props; // Destructure all needed props

    const filterTodosList = selectedTab === "all" ?
        todos:
        selectedTab === "completed" ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete); // Added semicolon

    return (
        <>
            {filterTodosList.map((todo) => {
                // Find the original index of the todo item in the 'todos' array
                // This is crucial because handleUpdateTodo and handleDeleteTodo
                // operate on the original 'todos' array by index.
                const originalTodoIdx = todos.findIndex(val => val.input === todo.input);

                return (
                    <TodoCard
                        key={todo.input} // Assuming todo.input is unique. If you have a unique ID, use that instead.
                        todo={todo}
                        todoIdx={originalTodoIdx} // Pass the original index
                        handleUpdateTodo={handleUpdateTodo} // Pass down specific handlers
                        handleDeleteTodo={handleDeleteTodo}
                    />
                )
            })}
        </>
    );
}