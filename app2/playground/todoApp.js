const items = [
  { id: 1, title: "read react book 1", status: "open" },
  { id: 1, title: "read react book 2", status: "open" },
  { id: 1, title: "read react book 3", status: "open" },
  { id: 1, title: "read react book 4", status: "open" },
];

const template = (
  <div>
    <div className="title">
      <h2>ToDo App</h2>
      <p>What Do You Want To Do Today ?</p>
    </div>
    <div className="add-todo">
      <div className="input-group mb-3">
        <textarea
          type="text"
          className="form-control"
          placeholder="add here...."
          rows="2"
          cols="150"
        ></textarea>
        <button className="btn btn-success" type="button" id="button-addon2">
          Add
        </button>
      </div>
    </div>
    <div className="items-list">
      {items.map((item) => {
        return (
          <div className="item">
            <div className="input-group mb-3">
              <input
                type="text"
                value={item.title}
                className="form-control-lg"
                size="100"
                readOnly
              ></input>
                <button className="btn btn-danger" type="button">
                  Complete
                </button><p></p>
              </div>
            </div>
        );
      })}
    </div>
  </div>
);

ReactDOM.render(template, document.getElementById("app"));
