import React,{useState, useEffect} from "react";
import axios from "axios";
import Row from './Row';



const Map = (props) => {

const [rooms, setRooms] = useState([])


useEffect(() => {
    axios
    .get('https://mud-game-28.herokuapp.com/api/adv/rooms')
    .then(res => {
        setRooms(res.data.map)
    })    
    .catch(err => console.log(err))
}, []);
return(
    <div className = "map-container">
             {rooms.map((row,index) => <Row key= {index} data={row} />)}
    </div>
    )
}

export default Map;



/* 

const Map = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        // Hit end point to get all the rooms
        // Set the rooms into localState
    }, [])
    return (
        <div className = "map-container"> 
            {rooms.map(row => <Row data={row} />)}
        </div>
    )
}

*/



























