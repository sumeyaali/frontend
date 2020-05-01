import React from "react"
import Dungeon from "./Dungeon";
import Map from "./Map"



const Dashboard=()=> {


    return(
      
        <div className='dash'>
        <h1 className='title'>Lambda Adventure Game</h1>
        <Map/>
        <Dungeon/>
        </div>
       
    )

}

export default Dashboard