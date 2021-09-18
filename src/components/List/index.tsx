import ListItem from "components/ListItem";
import { useRecoilValue } from "recoil"
import { filterTodoListState } from "store/todo";


const List = () => {
    const todos = useRecoilValue(filterTodoListState);
    return (
        <section>
            {!!todos.length && <hr />}
            {todos.map(todo => <ListItem key={todo.id} todo={todo} />)}
        </section>
    )
}

export default List
