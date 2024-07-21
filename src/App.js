import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
function App() {
  return (
    <div className="App">
      <span className="title">لیست کار ها اضافه شود</span> <br />
      <br />
      <TodoApp />
    </div>
  );
}

export default App;
