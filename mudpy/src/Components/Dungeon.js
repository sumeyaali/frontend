import React,{useEffect, useState} from "react";
// import {useSelector, useDispatch} from "react-redux";
import { movePlayer,initWorld } from "../actions/gameActions"
import { connect } from "react-redux";
import toon from "../images/toon.png";
import ReactDOM from "react-dom";

// initialize direction, build logic on the OnClick
// OnClick if room has exit to area then move there
// else return 'cant move that way something is blocking you'


const Dungeon = (props) => {
    const [position,setPosition]=useState({top:885,left:420})
   const handleClick = e => {
        e.preventDefault()
        props.movePlayer(e.target.value)
        if (props.player.error_msg === ""){moveHero(e.target.value)}
   } 
   
   const moveHero = (value) => {
      if(value ==='n'){
        setPosition({...position,top:position.top-40})
      }
      else if(value ==='s') {
        setPosition({...position,top:position.top+40})  
      }
      else if(value ==='e') {
        setPosition({...position,left:position.left+40})  
      }
      else if(value ==='w') {
        setPosition({...position,left:position.left-40})  
      }
   } 
console.log('POSITIONXXXXX',position)
//    document.getElementById("myBtn").style.left = "100px";
// let hero = document.getElementById('hero').style
// // ReactDOM.findDOMNode(hero).style.left="200px"
// console.log('XXXXHERO',hero)
    return(
        
        <div className='dungeon'>
            
            <div className="info">
            <h3>name: {props.player.name}</h3>  
            <h5>title: {props.player.title}</h5> 
            <p>description: {props.player.description}</p>
            <p className='players'>players: {props.player.players}</p>
            <p>error: {props.player.err_msg}</p>
            </div>
            <div className='btns'>
            <button className='btn n' value ='n' onClick={handleClick}>N</button>
            <button className='btn s' value ='s' onClick={handleClick}>S</button>
            <button className='btn e' value='e' onClick={handleClick}>E</button>
            <button className='btn w' value='w' onClick={handleClick}>W</button>
            </div>

            <img id='hero' src={toon} style={{top:position.top, left:position.left}}/>
          
        </div>
     
    )

}
const mapStateToProps = state => {
    // console.log('SSSSSSSSS',state.gameReducer.player)
    return {
        isLoading: state.isLoading,
        error: state.error,
        player: state.gameReducer.player
    }
}

export default connect(mapStateToProps,{movePlayer,initWorld})(Dungeon);

