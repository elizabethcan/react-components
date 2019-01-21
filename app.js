// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   }

//   return (
//   <ul>
//     <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// )};

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render () {
//     return (
//       <li>{this.props.groceryItems}</li>
//     );
//   }
// }

// var GroceryList = () => (
//   <ul>
//     {/* <GroceryListItem groceryItems = {['apples','oranges']} /> */}
//     {props.groceryListItem.map(item =>
//       <GroceryListItem item={item} />
//     )}
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));