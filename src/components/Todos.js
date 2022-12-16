import React, { useState } from "react";
import TodosItem from "./TodosItem";
// import TodosList from "./TodosList";

const Todos = () => {
  const [value, setValue] = useState("");

  const [tasks, setTask] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);
  console.log(tasks);
  const addTodosHandler = (e) => {
    e.preventDefault();
    const newTasks = {
      task: value,
      id: Math.random().toString(),
      completed: false,
    };
    setTask((prevState) => [...prevState, newTasks]);
    setValue("");
  };
  const deleteTask = (id) => {
    const taksId = [...tasks].filter((task) => task.id !== id);
    setTask(taksId);
  };
  const completedHandler = (id) => {
    const findTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
    });
    setTask(findTask);
  };
  return (
    <>
      <form onSubmit={addTodosHandler} action="">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      {tasks.map((task) => (
        <TodosItem
          key={task.id}
          Id={task.id}
          {...task}
          onDelete={deleteTask}
          onChangeCompleted={completedHandler}
        />
      ))}
    </>
  );
};

export default Todos;
