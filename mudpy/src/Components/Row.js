import React from "react";
import Tile from "./Tile";

const Row = props => {

    
    let string = props.data
    let chars = string.split('')
    return (
        
        <div className="row-container">
            {chars.map(char => (
                <Tile key={Math.random()} char={char} />
            ))}
            
        </div>
    )
}

export default Row;

/* 
const Row = props => {
    let string = props.data
    let chars = string.split('')
    return (
        <div className = "row-container">
            {chars.map(char => <Tile char={char} />)}
        </div>
    )
}

*/