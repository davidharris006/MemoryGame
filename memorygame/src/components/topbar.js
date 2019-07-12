import React from "react";

function Topbar(props) {
    return (
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <p class="logo">Clicky Game</p> 
        <div class="col-md"></div>
        <p class="statustext">test</p>
        <div class="col-md">
        </div>
        <div class="col-md">
        <p class="score">Score: 0{props.score} | Top Score: 0{props.topScore}</p>
        </div>
        
        </nav>
    </div>
    );
}


export default Topbar;