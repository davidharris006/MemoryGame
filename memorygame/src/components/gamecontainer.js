import React, { Component } from "react";
import Card from "./card"
import $ from 'jquery'

class Game extends Component {

    state = {
        score: 0,
        topscore: 0
    }
    
 hadleGameInteraction = () =>  {
    // const { name, value } =event.target;


    this.setState({
        score: this.state.score + 1
    });

 }

 clickOnCard = event => {
     const isClicked = event.target.getAttribute("is-clicked")
     
     
     $("#card-container").children('div.cards').each(function () {
         $(this).children('img').each(function() {
             if (this.getAttribute("is-clicked") === "false") {
                hadleGameInteraction();
                 event.target.setAttribute("is-clicked" , "true")
                 
                 console.log("This worked!");
                 console.log(this.state.score);
                }
                else {
                    console.log("reset the game!");
                }
            })
              
    })
      
     }



 render (){
     return (
         <div> 
             <div class="container-fluid" id="card-container">


                <Card src='https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png' onClick={this.clickOnCard} />
                 
             </div>
            
            
         </div>
     )
 }

}

export default Game;