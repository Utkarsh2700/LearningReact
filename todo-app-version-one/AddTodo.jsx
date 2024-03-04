import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    // console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const handleAddButtonCLicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to do here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-button"
            onClick={handleAddButtonCLicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
