class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        
        <AddToDoItem />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="title">
        <h2>ToDO App</h2>
        <p>what do you want to do today</p>
      </div>
    );
  }
}

  class AddToDoItem extends React.Component {
    render() {
        return (
            <div className="add-todo">
            <form >
              <div className="input-group mb-3">
                <textarea
                  name="itemtext"
                  className="form-control"
                  placeholder="add here...."
                  rows="2"
                  cols="150"
                ></textarea>
                <button
                  className="btn btn-success"
                  type="submit"
                  id="button-addon2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        );
      }
  }

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>copyright @ Vivek made with efforts</p>
      </div>
    );
  }
}
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

ReactDOM.render(<App />, document.getElementById("app"));
