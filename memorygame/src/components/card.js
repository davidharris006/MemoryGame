import React from "react";



function Card(props) {


    return (
        <div class="cards">

            <img class="carddiv" id={props.id} src={props.src} is-clicked="false" alt='Game PICTURE' onClick={props.onClick} />

            
        </div>
        
    )
}

export default Card;