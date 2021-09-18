import React from "react";
import { useSetRecoilState } from "recoil";
import { filterState, } from "store/todo";

const Filter = () => {
    const setFilter = useSetRecoilState(filterState);
    const handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setFilter(target.value);
    }
    return (
        <div onChange={handleChange}>
            <span>Show </span>
            <input type="radio" name="filter" value="All" id="all" defaultChecked />
            <label htmlFor="all">All</label>
            <input type="radio" name="filter" value="Done" id="done" />
            <label htmlFor="done">Done</label>
            <input type="radio" name="filter" value="Active" id="active" />
            <label htmlFor="active">Active</label>
        </div>
    )
}

export default Filter;
