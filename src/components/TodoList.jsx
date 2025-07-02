import { TodoCard } from "./TodoCard";



export function TodoList(props) {
    const { todos } = props;
    const filterTodosList = tab === "all" ?
        todos:
        tab === "completed" ?
            todos.filter(val => val.complete) :
            todos.filter(val => val.complete)

    const tab = "All";
    return (
        <>
            {filterTodosList.map((todo, todoIdx) => {
                return (
                    <TodoCard 
                        key={todoIdx} 
                        todo = {todo}/>
                )
            })}
        </>
    );
}