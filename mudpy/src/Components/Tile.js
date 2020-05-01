import React, {useState, useEffect} from "react";
import axios from "axios";
import door from "../images/door-image.png";
import room from "../images/room-image.png";
import black from "../images/brick-image.png";
import toon from "../images/toon.png";

const Tile = props => {

    const [activeRoom, setActiveRoom] = useState()
    const [something,setSomething] = useState()

    // useEffect(() => {
    //     axios
    //     .get('https://mud-game-28.herokuapp.com/api/adv/move')
    //     .then(res => {
    //         setActiveRoom(res.data.map)
    //     })    
    //     .catch(err => console.log(err))
    // }, [something]);
    



// let active tile = 
let char = props.char
let divClass = 'black'
if (char === 'X') {
    divClass = 'room'
}
else if (char === '*') {
    divClass = 'door'
}
else if (char === 'O') {
    divClass = 'toon'
}

// if (currentRoom )


    return (
        <div className="tile">
        {divClass === 'room' && <img src={room} />}
        {divClass === 'door' && <img src={door} />}
        {divClass === 'black' && <img src={black}/>}
        {divClass === 'toon' && <img src={toon}/>}
        </div>
    )
    
}

export default Tile;