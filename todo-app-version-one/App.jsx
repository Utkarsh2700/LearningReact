import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to Collage",
      dueDate: "4/10/2024",
    },
    {
      name: "Like React",
      dueDate: "right now",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
