interface Todo {
    id: number;
    text: string;
    isDone: boolean;
    isEditable: boolean;
}

type Filter = "Show All" | "Show Done" | "Show Active";