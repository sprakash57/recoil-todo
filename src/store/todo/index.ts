import { atom, selector } from "recoil";

export interface Todo {
    id: number;
    text: string;
    isDone: boolean;
    isEditable: boolean;
}

export const filterState = atom({
    key: "filterState",
    default: "All"
});

export const todoListState = atom({
    key: "todoListState",
    default: [] as Todo[]
});

export const filterTodoListState = selector({
    key: "filterTodoListState",
    get: ({ get }) => {
        const filter = get(filterState);
        const list: Todo[] = get(todoListState);
        switch (filter) {
            case "Done":
                return list.filter(item => item.isDone);
            case "Active":
                return list.filter(item => !item.isDone);
            default:
                return list;
        }
    }
});

export const todoStatsState = selector({
    key: "todoStatsState",
    get: ({ get }) => {
        const list = get(todoListState);
        const all = list.length;
        const done = list.filter(item => item.isDone).length;
        const active = all - done;
        const donePercentage = all === 0 ? 0 : done * 100 / all;
        return { all, active, donePercentage };
    }
})