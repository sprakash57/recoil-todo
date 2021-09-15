import ListItem from "components/ListItem";
import { useRecoilValue } from "recoil"
import { todoListState } from "store/todo";


const List = () => {
    const todos = useRecoilValue(todoListState);
    return (
        <section>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} />)}
        </section>
    )
}

export default List
