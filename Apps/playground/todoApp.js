let items = [];

const markItemComplete = (itemToRemove) => {
  // for (let index = 0; index < items.length; index++) {
  //   const item = items[index];
  //   if (item.id == itemToRemove.id) {
  //     items.splice(index, 1);
  //     break;
  //   }
  // }
  items = items.filter((item) => item.id != itemToRemove.id)
  render();
};

const addItem = (e) => {
  const title = e.target.elements.itemtext.value;
  console.log(title);
  if(title !==''){
  items.push({
    id: items.length + 1,
    status: "open",
    title,
  })
};
  e.target.elements.itemtext.value = ''
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
              name="itemtext"
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
      {items.length > 0 && (
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
                <button
                  onClick={() => {
                    markItemComplete(item);
                  }}
                  className="btn btn-danger"
                  type="button"
                >
                  Complete
                </button>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    )}
      <div className="footer">
        <p>copyright @ Vivek made with efforts</p>
      </div>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
