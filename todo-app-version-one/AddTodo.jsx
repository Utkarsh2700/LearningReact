function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input type="text" placeholder="Enter to do here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success my-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
