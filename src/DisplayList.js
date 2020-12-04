import React, {Component} from 'react';
import {Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

class DisplayList extends Component {
  constructor(props) {
  super(props);
  this.state = {};
  // this.handleClick = this.handleClick.bind(this);
}

  createCardsList() {
    {/* This function stylizes the item cards with their name, price and image */}

    const items = this.props.items.map(item => {
      return (
        <div xs ={10} md = {10}>
        <h1>
        {item.name}
        </h1>
        <h3>
        Price:${item.price}
        </h3>
          <img src={item.img}/>
          {/* This part additionally aadds the add/remove buttons to the cart which the aggregator methods are defined in filiteredLists*/}

          <Card>
          <Card.Body>
          <Button className= "buttons" onClick={()=>this.props.addToCart(item)}> Add</Button>
          <Button className= "buttons" onClick={()=>this.props.removeFromCart(item)}> Remove</Button>
          </Card.Body>
          </Card>
        </div>
      )
    });

    return items;
  }

  render() {
    return (
      <div>
      <ul class = "grid">
        {this.createCardsList()}
      </ul>

      </div>

    );
  }
}

export default DisplayList;
