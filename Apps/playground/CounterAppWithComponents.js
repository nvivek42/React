class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.Reset = this.onReset.bind(this);

    this.state = {
      counter: 0,
    };
  }
  onIncrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }
  onDecrement() {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  }
  onReset() {
    this.setState((prevState) => {
      return {
        counter: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <div>Count : {this.state.counter}</div>
        <hr />
        <button onClick={this.onIncrement}>+1</button>
        <button onClick={this.onDecrement}>-1</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <CounterApp title="Counter App" />,
  document.getElementById("app")
);
