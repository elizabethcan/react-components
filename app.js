// var App = () => (
//   <div>Some cliche salutation</div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

var GroceryList = () => (
  <ul>
    <Apples />
    <Oranges />
  </ul>
);

var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));