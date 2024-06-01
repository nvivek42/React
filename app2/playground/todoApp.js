const items = [];

const addItem = (e) => {
  const title = e.target.elements.itemtext.value
  items.push({
    id: items.length + 1,
    status: "open",
    title,
  });
  e.preventDefault();
  render();
};
const render = () => {
  const template = (
    <div>
      <div className="title">
        <h2>ToDo App</h2>
        <p>What Do You Want To Do Today ?</p>
      </div>
      <div className="add-todo">
        <form onSubmit={addItem}>
          <div className="input-group mb-3">
            <textarea
              type="itemtext"
              className="form-control"
              placeholder="add here...."
              rows="2"
              cols="150"
            ></textarea>
            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </form>
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
                </button>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
