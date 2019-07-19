import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar'
import Instructions from './components/instruction'
import Card from "./components/card"
import customData from "./data.json"


class App extends Component {

  state = {
    tiles: customData,
    topscore: 0,
    score: 0,
    idclicked: []
}

resetGame = () => {
  alert("YOU LOST TRY AGAIN PLEASE!")
  this.setState({
   ...this.state,
    tiles: customData,
    score: 0,
    idclicked: []
  })
}

clickOnCard = ({target: { id }}) => {
let newerArray = []
  if(this.state.idclicked.includes(id) === false) {
    newerArray = this.state.tiles.map((tile)=>{
      return tile
    })
    newerArray.sort(function(a, b){return 0.5 - Math.random()})
    this.setState({
      ...this.state,
      score: this.state.score + 1,
      topscore: this.state.score === this.state.topscore ? this.state.topscore + 1 : this.state.topscore,
      tiles: newerArray,
      idclicked: [...this.state.idclicked, id]
    })
    
    

 }
 else {
   this.resetGame()
 }
}


render() {
  return (
    <div className="App app">
      <Topbar score={this.state.score} topscore={this.state.topscore}/>  
      <Instructions />
      <div> 
             <div className="container-fluid" id="card-container">
        
                <div className="row">

{ this.state.tiles.map((tile)=> 
    
    
    
    <Card id={tile.id} clicked= {tile.clicked} src={tile.src}  onClick={this.clickOnCard}/>
    )
}

</div>
    
              
                 
    </div>
   
   
</div>
   
    </div>
  );
}
}
export default App;
