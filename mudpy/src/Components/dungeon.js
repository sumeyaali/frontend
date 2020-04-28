import React from "react"
import { movePlayer } from "../actions/gameActions"

// initialize direction, build logic on the OnClick
// OnClick if room has exit to area then move there
// else return 'cant move that way something is blocking you'


const dungeon = (props) => {

    // useEffect() = () => {
      
    // }
   
    return(
        // console.log("button clicked!", movePlayer('n'))
        <div>
            <button onClick={() => {movePlayer('n')}}>N</button>
            <button onClick={() => {movePlayer('s')}}>S</button>
            <button onClick={() => {movePlayer('e')}}>E</button>
            <button onClick={() => {movePlayer('w')}}>W</button>
        </div>
    )
}

export default dungeon;