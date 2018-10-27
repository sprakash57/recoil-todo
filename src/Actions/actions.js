let nextTask = 0;
export const addTask = text => {
  return {
    type: "ADD_TASK",
    id: nextTask++,
    text
  };
};

export const deleteTask = id => {
  return {
    type: "DELETE_TASK",
    id
  };
};

export const doneTask = id => {
  return {
    type: "DONE_TASK",
    id
  };
};

export const editTask = id => {
  return {
    type: "EDIT_TASK",
    id
  };
};

export const updateText = (text, id) => {
  //console.log(text);
  return {
    type: "UPDATE_TEXT",
    text,
    id
  };
};

export default { addTask, deleteTask, doneTask, editTask, updateText };
