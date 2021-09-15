import React, { useState } from "react"
import { useSetRecoilState } from "recoil";
import { todoListState } from "store/todo";

const Search = () => {
    const [todoInput, setTodoInput] = useState("");
    const setTodoListState = useSetRecoilState(todoListState);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoInput.trim()) {
            setTodoListState((prev: Todo[]) => [
                ...prev,
                {
                    id: new Date().getTime(),
                    text: todoInput,
                    isDone: false,
                    isEditable: false
                }
            ]);
            setTodoInput("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default Search
