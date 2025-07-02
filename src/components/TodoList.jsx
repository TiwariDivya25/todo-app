import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props;
    
    const filterTodosList = selectedTab === "all" ?
        todos:
        selectedTab === "completed" ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    
    return (
        <>
            {filterTodosList.map((todo, todoIdx) => {
                return (
                    <TodoCard 
                        key={todoIdx} 
                        todoIdx={todos.findindex(val => val.input = todo.input)}
                        {...props}
                        todo={todo}/>
                )
            })}
        </>
    );
}