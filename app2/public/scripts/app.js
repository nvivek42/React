"use strict";

var items = [{ id: 1, title: "read react book 1", status: "open" }, { id: 1, title: "read react book 2", status: "open" }, { id: 1, title: "read react book 3", status: "open" }, { id: 1, title: "read react book 4", status: "open" }];

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
      "div",
      { className: "input-group mb-3" },
      React.createElement("textarea", {
        type: "text",
        className: "form-control",
        placeholder: "add here....",
        rows: "2",
        cols: "150"
      }),
      React.createElement(
        "button",
        { className: "btn btn-success", type: "button", id: "button-addon2" },
        "Add"
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
