import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...tasklist, taskDetails]);
      setTask({ task: "" });
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    const element = tasklist.findIndex((elem) => elem.id == id);
    const newTaskList = [...tasklist];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };
  const handleEdit = (e, id) => {
    const element = tasklist.findIndex((elem) => elem.id == id);
    const newTaskList = [...tasklist];
  
    newTaskList[element] = {
      ...newTaskList[element],
      value: e.target.value,
      isCompleted: false,
    };
    setTaskList(newTaskList);
  };
  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="کار خود را اضافه کنید"
      />
      <button className="add-btn" onClick={AddTask}>
        اضافه
      </button>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li key={t.id}>
              <input
                value={t.value}
                type="text"
                onChange={(e) => handleEdit(e, t.id)}
                className={t.isCompleted ? "crossText" : "listitem"}
              />

              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                تکمیل
              </button>

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                حذف
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoApp;
