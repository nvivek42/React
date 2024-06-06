class App extends React.Component {
  render() {
    const items = [{ id: 1, title: "A", status: "open" }];

    return (
      <div>
        <Header title="ToDo App " subtitle="my first react app " />

        <AddToDoItem />
        <ListToDoItem items={items} />
        <Footer message="copyright @ Vivek made with efforts" />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="title">
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class AddToDoItem extends React.Component {
  render() {
    return (
      <div className="add-todo">
        <form>
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
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.message}</p>
      </div>
    );
  }
}
class ListToDoItem extends React.Component {
  render() {
    return (
      <div className="items-list">
        {this.props.items.map((item) => {
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
