class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd(note) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: prevState.notes.length + 1,
            title: note,
          },
        ],
      };
    });
  }

  onRemove(noteToRemove) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id != noteToRemove.id),
      };
    });
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
        <AddNote onAdd={this.onAdd} />
        {this.state.notes.length > 0 && (
          <NotesList notes={this.state.notes} onRemove={this.onRemove} />
        )}
      </div>
    );
  }
}
NotesApp.defaultProps = {
  title: "Notes App",
  subtitle: "what do you want to do today ? ",
};

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
    this.state = {
      isError: false,
    };
  }

  onAdd(e) {
    const note = e.target.elements.note.value;
    e.preventDefault();
    if (note.length > 0) {
      this.props.onAdd(note);
    }

    e.target.elements.note.value = "";
    this.setState({
      isError: note.length == 0,
    });
  }

  render() {
    return (
      <div className="add-note">
        <form onSubmit={this.onAdd}>
          <div className="input-group mb-3">
            <input
              size="100"
              name="note"
              type="text"
              className="form-control form-control"
              placeholder="add notes here"
            ></input>
            <button className="btn btn-success" type="submit">
              Add
            </button>
          </div>
          {this.state.isError && (
            <div className="text-danger">This cannot be empty</div>
          )}
        </form>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
        <h4>{this.props.subtitle}</h4>
      </div>
    );
  }
}

class NotesList extends React.Component {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(note) {
    this.props.onRemove(note);
  }

  render() {
    return (
      <div className="notes-list">
        {this.props.notes.map((note) => {
          return (
            <div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={note.title}
                  className="form-control-lg"
                  size="100"
                  readOnly
                ></input>
                <button
                  onClick={() => {
                    this.onRemove(note);
                  }}
                  className="btn btn-danger"
                  type="button"
                >
                  Delete
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

ReactDOM.render(<NotesApp />, document.getElementById("app"));
