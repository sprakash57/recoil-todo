import { combineReducers } from "redux";

const taskReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TASK":
        // console.log(state);
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            done: false,
            editable: false
          }
        ];
      case "DELETE_TASK":
        state = state.slice();
        state.splice(action.id, 1);
        break;

      case "DONE_TASK":
        console.log(state, action);
        return state.map(
          task => (task.id === action.id ? { ...task, done: !task.done } : task)
        );

      case "EDIT_TASK":
        return state.map(
          task =>
            task.id === action.id ? { ...task, editable: !task.editable } : task
        );

      case "UPDATE_TEXT":
        //console.log(state);
        return state.map(
          task =>
            task.id === action.id ? { ...task, text: action.text } : task
        );
      case "CLEAR_ALL":
        state = state.slice();
        state = [];
        return state;
      default:
        return state;
    }
  },
  reducers = combineReducers({
    tasks: taskReducer
  });

export default reducers;
