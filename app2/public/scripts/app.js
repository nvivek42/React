"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(AddToDoItem, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "title" },
        React.createElement(
          "h2",
          null,
          "ToDO App"
        ),
        React.createElement(
          "p",
          null,
          "what do you want to do today"
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var AddToDoItem = function (_React$Component3) {
  _inherits(AddToDoItem, _React$Component3);

  function AddToDoItem() {
    _classCallCheck(this, AddToDoItem);

    return _possibleConstructorReturn(this, (AddToDoItem.__proto__ || Object.getPrototypeOf(AddToDoItem)).apply(this, arguments));
  }

  _createClass(AddToDoItem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "add-todo" },
        React.createElement(
          "form",
          null,
          React.createElement(
            "div",
            { className: "input-group mb-3" },
            React.createElement("textarea", {
              name: "itemtext",
              className: "form-control",
              placeholder: "add here....",
              rows: "2",
              cols: "150"
            }),
            React.createElement(
              "button",
              {
                className: "btn btn-success",
                type: "submit",
                id: "button-addon2"
              },
              "Add"
            )
          )
        )
      );
    }
  }]);

  return AddToDoItem;
}(React.Component);

var Footer = function (_React$Component4) {
  _inherits(Footer, _React$Component4);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "footer" },
        React.createElement(
          "p",
          null,
          "copyright @ Vivek made with efforts"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);
//   class ListToDoItem extends React.Component {
//     render() {
//       return (
//         {items.length > 0 && (
//             <div className="items-list">
//               {items.map((item) => {
//                 return (
//                   <div className="item">
//                     <div className="input-group mb-3">
//                       <input
//                         type="text"
//                         value={item.title}
//                         className="form-control-lg"
//                         size="100"
//                         readOnly
//                       ></input>
//                       <button
//                         onClick={() => {
//                           markItemComplete(item);
//                         }}
//                         className="btn btn-danger"
//                         type="button"
//                       >
//                         Complete
//                       </button>
//                       <p></p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//       );
//     }
//   }

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
