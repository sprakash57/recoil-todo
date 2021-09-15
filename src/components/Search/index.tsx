import React, { useState } from "react"
import { useSetRecoilState } from "recoil";
import { todoListState } from "store/todo";
import styles from './index.module.css';

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                className={styles.form__input}
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <button className={styles.form__button}>Add</button>
        </form>
    )
}

export default Search
