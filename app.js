// create a GroceryList component that contains an unordered list of 2 grocery items
// Render this component to the div tag in index.html with an id of app

// example component:
// var App = () => (
//   <div>Some cliche salutation</div>
// );

// how to render
// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));

// var GroceryList = () => (
//   <li>Apples</li>
//   <li>Oranges</li>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));


// Create React components for the 2 items in your grocery list. For example, if your grocery list contains "cucumbers" and "kale", create a Cucumbers component and a Kale component
// Use these two new components inside your GroceryList component instead of the hardcoded <li>s

// example
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList />
//   </div>
// );

var Apples = () => (
  <li>Apples</li>
);

var Oranges = () => (
  <li>Oranges</li>
);

var GroceryList = () => (
  <div>
    <Apples />
    <Oranges />
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

// Create a reusable GroceryListItem component that dynamically renders a given grocery item
// Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component

var GroceryListItem = () => ()