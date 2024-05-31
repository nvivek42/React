const clickHandler = ()=> {
    alert('button clicked')
}
var counter = 0;
const increment = ()=> {
    counter += 1
    console.log(counter)
    render()
}
const decrement = ()=> {
    counter -= 1
console.log(counter)
render()
}

const double = () => {
  count *= 2
  render()
}

const triple = () => {
  count *= 3
  render()
}

const reset = () => {
  count = 0
  render()
}

const render = () => {
    
const template = (
    <div>
      <h3>App</h3>
      <h4 id="counter">counter: {counter} </h4>
      <button onClick= {increment}> +1 </button>
      <button onClick= {decrement}> -1 </button>
      <hr />
      <button onClick={double}>double</button>
      <button onClick={triple}>triple</button>
      <button onClick={reset}>reset</button>
    </div>
  )
console.log(template)
const root = document.getElementById("app");
ReactDOM.render(template, root);
}

render()

