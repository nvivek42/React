"use strict";

var items = [];

var addItem = function addItem(e) {
  var title = e.target.elements.itemtext.value;
  items.push({
    id: items.length + 1,
    status: "open",
    title: title
  });
  e.preventDefault();
  render();
};
var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h2",
        null,
        "ToDo App"
      ),
      React.createElement(
        "p",
        null,
        "What Do You Want To Do Today ?"
      )
    ),
    React.createElement(
      "div",
      { className: "add-todo" },
      React.createElement(
        "form",
        { onSubmit: addItem },
        React.createElement(
          "div",
          { className: "input-group mb-3" },
          React.createElement("textarea", {
            type: "itemtext",
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
    ),
    React.createElement(
      "div",
      { className: "items-list" },
      items.map(function (item) {
        return React.createElement(
          "div",
          { className: "item" },
          React.createElement(
            "div",
            { className: "input-group mb-3" },
            React.createElement("input", {
              type: "text",
              value: item.title,
              className: "form-control-lg",
              size: "100",
              readOnly: true
            }),
            React.createElement(
              "button",
              { className: "btn btn-danger", type: "button" },
              "Complete"
            ),
            React.createElement("p", null)
          )
        );
      })
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
