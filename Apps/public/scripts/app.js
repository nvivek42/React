'use strict';

var items = [];

var markItemComplete = function markItemComplete(itemToRemove) {
  // for (let index = 0; index < items.length; index++) {
  //   const item = items[index];
  //   if (item.id == itemToRemove.id) {
  //     items.splice(index, 1);
  //     break;
  //   }
  // }
  items = items.filter(function (item) {
    return item.id != itemToRemove.id;
  });
  render();
};

var addItem = function addItem(e) {
  var title = e.target.elements.itemtext.value;
  console.log(title);
  if (title !== '') {
    items.push({
      id: items.length + 1,
      status: "open",
      title: title
    });
  };
  e.target.elements.itemtext.value = '';
  e.preventDefault();
  render();
};
var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'title' },
      React.createElement(
        'h2',
        null,
        'ToDo App'
      ),
      React.createElement(
        'p',
        null,
        'What Do You Want To Do Today ?'
      )
    ),
    React.createElement(
      'div',
      { className: 'add-todo' },
      React.createElement(
        'form',
        { onSubmit: addItem },
        React.createElement(
          'div',
          { className: 'input-group mb-3' },
          React.createElement('textarea', {
            name: 'itemtext',
            className: 'form-control',
            placeholder: 'add here....',
            rows: '2',
            cols: '150'
          }),
          React.createElement(
            'button',
            {
              className: 'btn btn-success',
              type: 'submit',
              id: 'button-addon2'
            },
            'Add'
          )
        )
      )
    ),
    items.length > 0 && React.createElement(
      'div',
      { className: 'items-list' },
      items.map(function (item) {
        return React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'div',
            { className: 'input-group mb-3' },
            React.createElement('input', {
              type: 'text',
              value: item.title,
              className: 'form-control-lg',
              size: '100',
              readOnly: true
            }),
            React.createElement(
              'button',
              {
                onClick: function onClick() {
                  markItemComplete(item);
                },
                className: 'btn btn-danger',
                type: 'button'
              },
              'Complete'
            ),
            React.createElement('p', null)
          )
        );
      })
    ),
    React.createElement(
      'div',
      { className: 'footer' },
      React.createElement(
        'p',
        null,
        'copyright @ Vivek made with efforts'
      )
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
