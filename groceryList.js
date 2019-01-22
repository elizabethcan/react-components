class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  mouseEnter() {
    this.setState({
      hovered: true
    });
  }

  mouseLeave() {
    this.setState({
      hovered: false
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Apples', 'Oranges']}/>
  </div>
);
  
ReactDOM.render(<App />, document.getElementById("app"));
  