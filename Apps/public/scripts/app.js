"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterApp = function (_React$Component) {
  _inherits(CounterApp, _React$Component);

  function CounterApp(props) {
    _classCallCheck(this, CounterApp);

    var _this = _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));

    _this.onIncrement = _this.onIncrement.bind(_this);
    _this.onDecrement = _this.onDecrement.bind(_this);
    _this.Reset = _this.onReset.bind(_this);

    _this.state = {
      counter: 0
    };
    return _this;
  }

  _createClass(CounterApp, [{
    key: "onIncrement",
    value: function onIncrement() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: "onDecrement",
    value: function onDecrement() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }, {
    key: "onReset",
    value: function onReset() {
      this.setState(function (prevState) {
        return {
          counter: 0
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("component did mount");
      this.setState({
        counter: localStorage["counter"] ? parseInt(localStorage["counter"], 10) : 0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("Component Did Update");
      //console.log(prevProps)
      if (prevState.counter != this.state.counter) {
        //console.log(prevProps)
        localStorage.setItem("counter", this.state.counter);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component will Unmount");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          this.props.title
        ),
        React.createElement(
          "div",
          null,
          "Count : ",
          this.state.counter
        ),
        React.createElement("hr", null),
        React.createElement(
          "button",
          { onClick: this.onIncrement },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.onDecrement },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.Reset },
          "Reset"
        )
      );
    }
  }]);

  return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, { title: "Counter App" }), document.getElementById("app"));
