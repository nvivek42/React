const product = {}

const clickHandler = (e) => {
    e.preventDefault();
    product.title = e.target.elements.title.value
    product.description = e.target.elements.description.value
    
    render()
};

const render = () => {
const template = (
  <div>
    <h3>App4</h3>
    <form onSubmit = {clickHandler}>
      <div>
        title: <input type="text" name="title"></input>
      </div>
      <div>
        description: <input type="text" name="description"></input>
      </div>
      <button type="submit"> click here</button>
    </form>
    <hr />
    
    <hr />
    <h4>Category Details</h4>
    {product.title && <div>title: {product.title} </div>}
    {product.description && <div>description: {product.description} </div>}
  </div>
);

ReactDOM.render(template, document.getElementById("app"));
}
render();