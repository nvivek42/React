'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotesApp = function (_React$Component) {
  _inherits(NotesApp, _React$Component);

  function NotesApp() {
    _classCallCheck(this, NotesApp);

    return _possibleConstructorReturn(this, (NotesApp.__proto__ || Object.getPrototypeOf(NotesApp)).apply(this, arguments));
  }

  _createClass(NotesApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: this.props.title, subtitle: this.props.subtitle })
      );
    }
  }]);

  return NotesApp;
}(React.Component);

NotesApp.defaultProps = {
  title: 'Notes App',
  subtitle: 'what do you want to do today ? '
};

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'title' },
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h4',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Header1 = function (_React$Component3) {
  _inherits(Header1, _React$Component3);

  function Header1() {
    _classCallCheck(this, Header1);

    return _possibleConstructorReturn(this, (Header1.__proto__ || Object.getPrototypeOf(Header1)).apply(this, arguments));
  }

  _createClass(Header1, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'this is div1'
        )
      );
    }
  }]);

  return Header1;
}(React.Component);

ReactDOM.render(React.createElement(NotesApp, null), document.getElementById("app"));
