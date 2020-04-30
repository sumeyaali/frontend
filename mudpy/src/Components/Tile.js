import React from "react";
import door from "../images/door-image.png";
import room from "../images/room-image.png";
import black from "../images/brick-image.png";

const Tile = props => {


/* 
const Tile = props => {
    let char = props.char
    let divClass = 'black'
    if ( char === 'X' ) {
        divClass = 'room'
    }
    else if ( char === '*' ) {
        divClass = 'door'
    }
    return (
        <> 
        {divClass === 'X' && <img src={room}/>}
        {divClass === '*' && <img src={door}/>}
        {divClass === 'black' && <img src={nothing}/>}
        </>
    )
}


*/

let char = props.char
let divClass = 'black'
if (char === 'X') {
    divClass = 'room'
}
else if (char === '*') {
    divClass = 'door'
}

    return (
        <div className="tile">
        {divClass === 'room' && <img src={room} />}
        {divClass === 'door' && <img src={door} />}
        {divClass === 'black' && <img src={black}/>}
        </div>
    )
    
}

export default Tile;