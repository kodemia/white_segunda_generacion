import React, {Component} from 'react';
import './Home.css'

// components
import Dish from '../Dish';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [],
      orders: []
    }
    this.handleClickDish = this.handleClickDish.bind(this);
  }

  componentDidMount() {
    fetch('https://fondapi.devcharles.com/dishes')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      let { dishes } = json.payload;
      this.setState({
        dishes
      });
    });
  }

  handleClickDish(e) {
    let ct = e.currentTarget,
        id = ct.id,
        name = ct.dataset.name,
        { orders } = this.state,
        newOrder = [...orders, { id, name }];

    this.setState({
      orders: newOrder
    });
  }

  render() {
    let { dishes, orders } = this.state;
    let dishesRender = dishes.map( dish => {
      let {_id, name} = dish;
      return(
        <Dish
          key={_id}
          id ={_id}
          name = {name}
          addOrderClick={this.handleClickDish}
        >
        </Dish>
      );
    });

    let ordersRender = orders.map( order => {
      return(
        <h3 key={order.id}>{ order.name }</h3>
      );
    });

    return (
      <div className="App-Home">
        <div className="App-Dishes">
          <h1 onClick={this.handleClickDish}>Carta</h1>
          { dishesRender }
        </div>
        <div className="App-Orders">
          { ordersRender }
        </div>
      </div>
    );
  }
}

export default Home;
