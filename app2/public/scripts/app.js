"use strict";

var product = {};

var clickHandler = function clickHandler(e) {
  e.preventDefault();
  product.title = e.target.elements.title.value;
  product.description = e.target.elements.description.value;

  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "App4"
    ),
    React.createElement(
      "form",
      { onSubmit: clickHandler },
      React.createElement(
        "div",
        null,
        "title: ",
        React.createElement("input", { type: "text", name: "title" })
      ),
      React.createElement(
        "div",
        null,
        "description: ",
        React.createElement("input", { type: "text", name: "description" })
      ),
      React.createElement(
        "button",
        { type: "submit" },
        " click here"
      )
    ),
    React.createElement("hr", null),
    React.createElement("hr", null),
    React.createElement(
      "h4",
      null,
      "Category Details"
    ),
    product.title && React.createElement(
      "div",
      null,
      "title: ",
      product.title,
      " "
    ),
    product.description && React.createElement(
      "div",
      null,
      "description: ",
      product.description,
      " "
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
