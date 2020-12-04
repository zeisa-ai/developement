import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import DisplayList from "./DisplayList";

class FilteredList extends Component {
  constructor(props) {
    super(props);

//state variables
    this.state = {
      shopping: [],
      search: "",
      type: "All",
      size: "All",
      sort: "All",
      items: this.props.items,
      total:0,

    };
  }

//filter function that sets the type state
  typeFilter = event => {

    this.setState({ type: event});
  };

//filter function that sets the size state
  sizeFilter = event => {

    this.setState({ size: event});
  };

  //sort function that sets the sort state
  selectSort = event => {

    this.setState({ sort: event});
  };

//helper function to check if the type filter is selected (returns true or false)
  isFilterType = item => {

    if(this.state.type === "All"){
      return true;
    }
    else if(this.state.type === item.type){
      return true;
    }
    else{
      return false;
    }
  }

  //helper function to check if the size filter is selected (returns true or false)
  isFilterSize = item => {
    if(this.state.size === "All"){
      return true;
    }
    else if(this.state.size === item.size){
      return true;
    }
    else{
      return false;
    }
  }

  //helper function to that takes in two items compares their rating value (defined in the list of produce) to then sort these valuess
  sortCategories = (item1, item2) => {
      if (this.state.sort === "All") {
        return 0;
      }
      else if (this.state.sort === "rating"){
        return item1.rating - item2.rating;
      }
    }
//this is a helper function that checks if the item passed can fit into either of the filter functions defined earlier
  filter = item => {
    return this.isFilterType(item) && this.isFilterSize(item);
  }

//this is aggregator function that adds items to the cart and updates the total amount
addToCart = item=>{
  const array = [...this.state.shopping, item]
  this.setState({shopping: array, total: this.state.total+item.price});
};

//this is aggregator function that removes items to the cart and updates the total amount
//I had A LOT of issues with this code and still is a bit buggy since it doesn't
//remove the element I click to remove (instead removes anything but the one I clicked on)
//however I tried more than 5 different implementations and kept getting the same outcome :(


removeFromCart = item => {
  console.log(item);
  var removeItem = this.state.shopping;
    removeItem.splice(item, 1);
    this.setState({shopping: removeItem });
if(this.state.total >0){
  this.setState({shopping: removeItem, total: this.state.total-item.price});

}
};

//this render functions displays all the buttons and slectioin criteria for
//all the filter and sort options
//styling doe in index.css
  render() {
    return (
      <div className="filter-list">
        <div className = "buttons">
        {/* filter by Type of fruit criteria*/}
        <DropdownButton title="Type" id="dropdownButton">
          <Dropdown.Item eventKey="All" onSelect={this.typeFilter}>
            All
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="berry" onSelect={this.typeFilter} >
            Berry
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="drupe" onSelect={this.typeFilter}>
            Drupe
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="citrus" onSelect={this.typeFilter}>
            Citrus
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="pome" onSelect={this.typeFilter}>
            Pome
          </Dropdown.Item>
        </DropdownButton>

        {/*/filter by Size criteria*/}
        <DropdownButton title="Size" id="dropdownButton">
          <Dropdown.Item id="text"eventKey="All" onSelect={this.sizeFilter}>
              All
          </Dropdown.Item>
          <Dropdown.Item id="text"eventKey="Small" onSelect={this.sizeFilter}>
            Small
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="Medium" onSelect={this.sizeFilter}>
            Medium
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="Large" onSelect={this.sizeFilter}>
            Large
          </Dropdown.Item>
        </DropdownButton>

        {/* button for sorting by rating*/}
        <DropdownButton title="Sort" id="dropdownButton">
          <Dropdown.Item id="text" eventKey="All" onSelect={this.selectSort}>
            All
          </Dropdown.Item>
          <Dropdown.Item id="text" eventKey="rating" onSelect={this.selectSort}>
            Rating
          </Dropdown.Item>
         </DropdownButton>
      </div>

      {/* /this line takes in the DisplayList instance defined in that istance so as to sshow the fruit's display card info*/}
        <DisplayList items={this.props.items.filter(this.filter).sort(this.sortCategories)} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>

{/* /this set of code sets up the cart information to be displayed including the final price*/}
<h4 id="title"> Cart</h4>
<h4 id="text"> Total = ${Math.abs(this.state.total.toFixed())}</h4>
{/* /this line of code allows the "updated" list to be displayed after items are added and removed...however the remove is wonky*/}
<DisplayList items= {this.state.shopping} removeFromCart={this.removeFromCart} addToCart={this.addToCart} />
  </div>


    );
  }
}

export default FilteredList;
