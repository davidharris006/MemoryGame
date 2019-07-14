import React, { Component } from "react";
import Card from "./card"
import customData from "../data.json"
// import $ from 'jquery'

class Game extends Component {

    state = {
        tiles: customData,
        topscore: 0,
        score: 0
    }
    


 clickOnCard = event => {
     console.log(event.target);
    console.log(this.state);
   console.log(event.target.isclicked)
  if (event.target.clicked === "flase") {
      console.log("worked");
  }
  
      
     }



 render (){
     return (
         <div> 
             <div className="container-fluid" id="card-container">
        
                <div className="row">




                </div>
    
              
                 
             </div>
            
            
         </div>
     )
 }
}


export default Game;