class NotesApp extends React.Component {
  render() {
    return (
      <div>
        <Header title={this.props.title} subtitle={this.props.subtitle} />
      </div>
    );
  }
}
NotesApp.defaultProps = {
    title: 'Notes App',
     subtitle: 'what do you want to do today ? '
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

class Header1 extends React.Component {
  render() {
    return (
      <div>
        <h1>this is div1</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <NotesApp  />,
  document.getElementById("app")
);
