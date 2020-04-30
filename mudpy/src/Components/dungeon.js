import React,{useEffect, useState} from "react";
// import {useSelector, useDispatch} from "react-redux";
import { movePlayer,initWorld } from "../actions/gameActions"
import { connect } from "react-redux";

// initialize direction, build logic on the OnClick
// OnClick if room has exit to area then move there
// else return 'cant move that way something is blocking you'


const Dungeon = (props) => {
   
    return(  
        <div className='dungeon'>
            <div className="info">
            <h3>name: {props.player.name}</h3>  
            <h5>title: {props.title}</h5> 
            <p>description: {props.player.description}</p>
            <p className='players'>players: {props.player.players}</p>
            <p>error: {props.player.err_msg}</p>
            </div>
            <div className='btns'>
            <button className='btn n' onClick={() => {props.movePlayer('n')}}>N</button>
            <button className='btn s' onClick={() => {props.movePlayer('s')}}>S</button>
            <button className='btn e' onClick={() => {props.movePlayer('e')}}>E</button>
            <button className='btn w' onClick={() => {props.movePlayer('w')}}>W</button>
            </div>
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

