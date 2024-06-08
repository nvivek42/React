"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotesApp = function (_React$Component) {
  _inherits(NotesApp, _React$Component);

  function NotesApp(props) {
    _classCallCheck(this, NotesApp);

    var _this = _possibleConstructorReturn(this, (NotesApp.__proto__ || Object.getPrototypeOf(NotesApp)).call(this, props));

    _this.state = {
      notes: [{ id: 1, title: "note 1" }, { id: 2, title: "note 2" }, { id: 3, title: "note 3" }]
    };

    _this.onAdd = _this.onAdd.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);
    return _this;
  }

  _createClass(NotesApp, [{
    key: "onAdd",
    value: function onAdd(note) {
      this.setState(function (prevState) {
        return {
          notes: [].concat(_toConsumableArray(prevState.notes), [{
            id: prevState.notes.length + 1,
            title: note
          }])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: this.props.title, subtitle: this.props.subtitle }),
        React.createElement(AddNote, null),
        React.createElement(NotesList, { notes: this.state.notes })
      );
    }
  }]);

  return NotesApp;
}(React.Component);

NotesApp.defaultProps = {
  title: "Notes App",
  subtitle: "what do you want to do today ? "
};

var AddNote = function (_React$Component2) {
  _inherits(AddNote, _React$Component2);

  function AddNote(props) {
    _classCallCheck(this, AddNote);

    var _this2 = _possibleConstructorReturn(this, (AddNote.__proto__ || Object.getPrototypeOf(AddNote)).call(this, props));

    _this2.onAdd = _this2.onAdd.bind(_this2);
    return _this2;
  }

  _createClass(AddNote, [{
    key: "onAdd",
    value: function onAdd(e) {
      var note = e.target.elements.note.value;
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "add-note" },
        React.createElement(
          "form",
          { onSubmit: this.onAdd },
          React.createElement(
            "div",
            { className: "input-group mb-3" },
            React.createElement("input", {
              size: "100",
              name: "note",
              type: "text",
              className: "form-control form-control",
              placeholder: "add notes here"
            }),
            React.createElement(
              "button",
              { className: "btn btn-success", type: "submit" },
              "Add"
            )
          )
        )
      );
    }
  }]);

  return AddNote;
}(React.Component);

var Header = function (_React$Component3) {
  _inherits(Header, _React$Component3);

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
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h4",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var NotesList = function (_React$Component4) {
  _inherits(NotesList, _React$Component4);

  function NotesList(props) {
    _classCallCheck(this, NotesList);

    var _this4 = _possibleConstructorReturn(this, (NotesList.__proto__ || Object.getPrototypeOf(NotesList)).call(this, props));

    _this4.onRemove = _this4.onRemove.bind(_this4);
    return _this4;
  }

  _createClass(NotesList, [{
    key: "onRemove",
    value: function onRemove(note) {}
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return React.createElement(
        "div",
        { className: "notes-list" },
        this.props.notes.map(function (note) {
          return React.createElement(
            "div",
            { classname: "container" },
            React.createElement(
              "div",
              { className: "input-group mb-3" },
              React.createElement("input", {
                type: "text",
                value: note.title,
                className: "form-control-lg",
                size: "100",
                readOnly: true
              }),
              React.createElement(
                "button",
                {
                  onClick: function onClick() {
                    _this5.onRemove(note);
                  },
                  className: "btn btn-danger",
                  type: "button"
                },
                "Delete"
              ),
              React.createElement("p", null)
            )
          );
        })
      );
    }
  }]);

  return NotesList;
}(React.Component);

ReactDOM.render(React.createElement(NotesApp, null), document.getElementById("app"));
