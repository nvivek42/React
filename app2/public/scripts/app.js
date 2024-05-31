"use strict";

var person = {};
var submitData = function submitData(e) {
    e.preventDefault();
    var personName = e.target.elements.personName.value;
    person.name = personName;
    render();
};
var render = function render() {

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { onSubmit: submitData },
            React.createElement(
                "div",
                null,
                "name: ",
                React.createElement("input", { type: "text", name: "personName" })
            ),
            React.createElement(
                "div",
                null,
                "address: ",
                React.createElement("input", { type: "text", name: "address" })
            ),
            React.createElement(
                "div",
                null,
                "phone: ",
                React.createElement("input", { type: "text", name: "phone" })
            ),
            React.createElement(
                "div",
                null,
                "email: ",
                React.createElement("input", { type: "text", name: "email" })
            ),
            React.createElement(
                "button",
                { type: "submit" },
                "submit"
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement("hr", null),
            React.createElement(
                "div",
                null,
                "person name: ",
                person.name,
                " "
            ),
            React.createElement(
                "div",
                null,
                "person address: ",
                person.address,
                " "
            ),
            React.createElement(
                "div",
                null,
                "person phone: ",
                person.phone,
                " "
            ),
            React.createElement(
                "div",
                null,
                "person email: ",
                person.email,
                " "
            )
        )
    );

    var root = document.getElementById('app');
    ReactDOM.render(template, root);
};

render();
