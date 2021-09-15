import { clsx } from "helpers/utils";
import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "store/todo";
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
    const editItem = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        const newList = todoList.map(item => {
            if (item.id === id) return { ...item, isEditable: e.currentTarget.textContent === 'Edit' }
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
        <div className={styles.row}>
            <div className={styles.row__inputs}>
                <input
                    type="checkbox"
                    className={styles.row__inputs__checkbox}
                    checked={todo.isDone}
                    onChange={checkItem}
                    disabled={todo.isEditable}
                />
                {todo.isEditable
                    ? <input type="text" className={styles.row__inputs__text} value={todo.text} onChange={editItemText} />
                    : <span className={clsx(styles.row__inputs__span, todo.isDone && styles.row__inputs__strike)}>{todo.text}</span>
                }
            </div>
            <div className={styles.row__btn}>
                <button onClick={(e) => editItem(e, todo.id)}>{todo.isEditable ? 'Save' : 'Edit'}</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    )
}

export default ListItem;
