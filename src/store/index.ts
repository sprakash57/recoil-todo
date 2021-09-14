import { atom } from "recoil";

const todoListState = atom({
    key: "todoListState",
    default: [] as Todo[]
});

export default todoListState;
