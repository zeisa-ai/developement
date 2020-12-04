import logo from './logo.svg';
import React, {Component} from 'react';
//import './App.css';
import {AppBar, Toolbar} from "@material-ui/core"
import FilteredList from "./FilteredList";
import Pomegranate from "./pomegranate.jpg";
import Mango from "./mango.jpg";
import Orange from "./Orange.jpg";
import Kiwi from "./kiwi.jpg";
import Rambutaan from "./rambuttan.jpg";
import Raspberry from "./raspberry.jpg";
import Apple from "./apple.jpg";
import Coconut from "./Coconuts.jpg";
import Fig from "./figs.jpg";
import Papaya from "./papaya.png";
import Peach from "./Peach.jpg";
import Lime from "./lime.jpg";

{/* list of fruits with associated identifiers */}
const fruits = [
  { name: "Pomegranate", size: "Medium", type: "berry", img: Pomegranate, rating: 10, price: 10,key: 1},
  { name: "Orange", size: "Medium", type: "citrus", img: Orange, rating: 5, price: 5, key: 2},
  { name: "Apple", size: "Small", type: "pome", img: Apple, rating: 2, price: 2, key: 3},
  { name: "Kiwi", size: "Small", type: "berry", img: Kiwi, rating: 6, price: 5, key: 4  },
  { name: "Rasberry", size: "Small", type: "berry", img: Raspberry, rating: 8, price: 7, key: 5},
  { name: "Rambutaan", size: "Small", type: "berry" ,img: Rambutaan, rating: 7, price: 20, key: 6 },
  { name: "Coconut", size: "Large", type: "drupe", img: Coconut, rating:2, price: 5, key: 7 },
  { name: "Papaya", size: "Large", type: "berry", img: Papaya, rating:1, price: 6, key: 8},
  { name: "Mango", size: "Large", type: "drupe", img: Mango,rating:9, price: 10, key: 9 },
  { name: "Lime", size: "Small", type: "citrus", img: Lime, rating:8, price: 4, key: 10 },
  { name: "Fig", size: "Small" ,type: "berry", img: Fig, rating:10, price: 15, key: 11},
  { name: "Peach", size: "Medium", type: "drupe", img: Peach ,rating: 6, price: 7, key: 12 }
];

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 id ="title" > Fruit Stand</h1>
        <FilteredList items = {fruits}/>
      </div>
    );
  }
}

export default App;
