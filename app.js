// create a GroceryList component that contains an unordered list of 2 grocery items
// Render this component to the div tag in index.html with an id of app

// example component:
// var App = () => (
//   <div>Some cliche salutation</div>
// );

// how to render
// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));

var GroceryList = () => (
  <li>Apples</li>
  <li>Oranges</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));