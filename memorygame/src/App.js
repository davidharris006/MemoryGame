import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar'
import Instructions from './components/instruction'
// import Game from './components/gamecontainer'
import Card from "./components/card"
import customData from "./data.json"


class App extends Component {

  state = {
    tiles: customData,
    topscore: 0,
    score: 0
}

clickOnCard = ({target: { id }}) => {
  if(this.state.tiles[id].clicked === "false"){
    var newerArray= [];
    let newdata = {}
    newdata =this.state.tiles[id]
    newdata= {
    ...newdata,
    clicked: "true"
    }
    let intId = parseFloat(id)
    console.log('has not been clicked')
    
    newerArray = this.state.tiles.map((tile) => {
     
     if (tile.id !== id) {
       
         return tile
      }
      else if (tile.id = id) {
        return newdata
        console.log("done");
      }
      
    }) 
    console.log(newerArray)
    console.log(newdata);
    // newerArray.push(newdata)
    newerArray.sort(function(a, b){return 0.5 - Math.random()})
    this.setState({
     
      score: this.state.score + 1,
      topscore: this.state.score === this.state.topscore ? this.state.topscore + 1 : this.state.topscore,
      tiles: newerArray
    })
 }
 else if (this.state.tiles[id].clicked === "true"){

console.log("BOO YOU LOSE");
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
