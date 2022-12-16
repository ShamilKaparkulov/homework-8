import React from "react";
import { TodoStyled } from "./TodoStyled";

const TodosItem = ({ task, onDelete, Id, completed, onChangeCompleted }) => {
  console.log(completed);
  const deleteTaskHandler = (id) => {
    onDelete(id);
  };
  const completedHandler = (id) => {
    onChangeCompleted(id)
  };
  return (
    <TodoStyled>
      <div className="todos-item">
        <input
        className="input-completed"
          type="checkbox"
          checked={completed}
          onClick={() => completedHandler(Id)}
        />
        <div>{task}</div>
        <button onClick={() => deleteTaskHandler(Id)}>delete</button>
      </div>
    </TodoStyled>
  );
};

export default TodosItem;
