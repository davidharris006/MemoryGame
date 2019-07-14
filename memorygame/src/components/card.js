import React from "react";



function Card(props) {

    return (
        <div className="cards col-lg-3">

            <img className="cardimg" id={props.id}  src={props.src} clicked={props.clicked} alt='Game PICTURE' onClick={props.onClick} />

            
        </div>
        
    )
}

export default Card;