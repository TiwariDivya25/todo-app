import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]) // Initialize with an empty array or default todo
  const [selectedTab, setSelectedTab] = useState("open")

  // Load todos from localStorage on initial render
  useEffect(() => {
    if (localStorage && localStorage.getItem("todo-app")) {
      try {
        const storedData = JSON.parse(localStorage.getItem("todo-app"));
        if (storedData && Array.isArray(storedData.todos)) {
          setTodos(storedData.todos);
        }
      } catch (e) {
        console.error("Failed to parse todos from localStorage:", e);
        // Optionally, clear invalid data or set default todos
        // localStorage.removeItem("todo-app");
        // setTodos([{ input: 'Hello! Add your first todo!', complete: true }]);
      }
    } else {
      // If no data in localStorage, or localStorage is not available,
      // initialize with a default todo if the array is empty
      if (todos.length === 0) {
         setTodos([{ input: 'Hello! Add your first todo!', complete: false }]);
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleUpdateTodo(idx) {
    let newTodoList = [...todos]
    // Check if the index is valid
    if (idx >= 0 && idx < newTodoList.length) {
        newTodoList[idx] = { ...newTodoList[idx], complete: true }; // Create a new object to avoid direct mutation
        setTodos(newTodoList);
        handleSaveData(newTodoList);
    }
  }

  function handleDeleteTodo(idx) {
    let newTodoList = todos.filter((val, valIdx) => {
      return valIdx !== idx
    })
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos : currTodos}))
  }

  return (
    <>
      <Header todos={todos.filter(todo => !todo.complete)} /> {/* Pass only open todos to Header */}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App