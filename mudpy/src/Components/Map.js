import React,{useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Row from './Row';



const Map = (props) => {

const [rooms, setRooms] = useState([])

const getmap=()=>{
    axiosWithAuth()
        .get('https://mud-game-28.herokuapp.com/api/adv/rooms')
        .then(res => {
            setRooms(res.data.map)
        
        })    
        .catch(err => console.log(err))
}

useEffect(() => {
    getmap()   
},[]);

console.log('XXXXXXXXXXXXXXXXXX',rooms)
return(
    <div className = "map-container">
             {rooms.map((row,index) => <Row key= {index} data={row} />)}
    </div>
    )
}

export default Map;































