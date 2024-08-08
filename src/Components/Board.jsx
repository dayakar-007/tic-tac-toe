import React, { useState } from 'react'
import Square from './Square'

export default function Board(props) {
   
    const handleClick=(i)=>
    {
        if(props.box[i]||props.match_status) return ;
        const nextSquares=props.box.slice();
        nextSquares[i]=props.isNext?"X":"O";
        props.onPlay(nextSquares);     
    }
    return (
    <>
    <div className="tic-tac-toe">
    <div className="status">
        <h1>{props.status}</h1>
        
    </div>
    <div className="board-row">
        <Square value={props.box[0]} onHandleClick={()=>handleClick(0)}/>
        <Square value={props.box[1]} onHandleClick={()=>handleClick(1)}/>
        <Square value={props.box[2]} onHandleClick={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
        <Square value={props.box[3]} onHandleClick={()=>handleClick(3)}/>
        <Square value={props.box[4]} onHandleClick={()=>handleClick(4)}/>
        <Square value={props.box[5]} onHandleClick={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
        <Square value={props.box[6]} onHandleClick={()=>handleClick(6)}/>
        <Square value={props.box[7]} onHandleClick={()=>handleClick(7)}/>
        <Square value={props.box[8]} onHandleClick={()=>handleClick(8)}/>
    </div>
    </div>
      
    </>
  )
}
