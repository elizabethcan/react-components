// var App = () => (
//   <div>Some cliche salutation</div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

var GroceryList = () => (
  <ul>
    <GroceryListItem items = {['apples','oranges']} />
  </ul>
);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));