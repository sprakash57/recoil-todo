import React from "react";
import { useRecoilState } from "recoil";
import todoListState from "store";
import styles from './index.module.css';

const ListItem = ({ todo }: { todo: Todo }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const todoIndex = todoList.findIndex(item => item === todo);
    const deleteItem = () => {
        const newList = [
            ...todoList.slice(0, todoIndex),
            ...todoList.slice(todoIndex + 1)
        ];
        setTodoList(newList);
    }
    const editItem = (id: number) => {
        const newList = todoList.map(item => {
            if (item.id === id) return { ...item, isEditable: true }
            return { ...item, isEditable: false };
        })
        setTodoList(newList);
    }
    const editItemText = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const newList: Todo[] = [
            ...todoList.slice(0, todoIndex),
            { ...todoList[todoIndex], text: target.value },
            ...todoList.slice(todoIndex + 1)
        ];
        setTodoList(newList);
    }
    const checkItem = () => {
        const newList: Todo[] = [
            ...todoList.slice(0, todoIndex),
            { ...todoList[todoIndex], isDone: !todoList[todoIndex].isDone },
            ...todoList.slice(todoIndex + 1)
        ];
        setTodoList(newList);
    }
    return (
        <div>
            {todo.isEditable
                ? <input type="text" value={todo.text} onChange={editItemText} />
                : <span className={todo.isDone ? styles.strike : ""} onClick={() => editItem(todo.id)}>{todo.text}</span>
            }
            <input type="checkbox" checked={todo.isDone} onChange={checkItem} disabled={todo.isEditable} />
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

export default ListItem;
