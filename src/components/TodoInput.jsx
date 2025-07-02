import { useState } from "react"

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="input-container">
            <input value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            placeholder="Add Task"/>

            <button onClick={() => {
                if (!inputValue.trim()) { return } // Trim whitespace before checking for empty input
                handleAddTodo(inputValue)
                setInputValue("")
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}