import React, { useState }  from 'react'
import Board from './Board'

export default function Game() {
    
    const [his,setHis]=useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove]=useState(0);
    const [nextStep,setNextStep]=useState(true);
    const box=his[currentMove];
    
    const handleOnPlay=(square1)=>
    {
        const next_History=[...his.slice(0,currentMove+1),square1];
        setHis(next_History);
        setCurrentMove(next_History.length-1);
        setNextStep(!nextStep);
        
    }
    const showHistory=(index)=>
    {
       setCurrentMove(index);
       setNextStep(index%2==0);
    }
    
    
    const move=his.map((s,index)=>{
        let description;
        if(index==0)
        {
            description="Start The game";
        }
        else{
            description="Go to Move"+index;
        }
        return <li key={index}><button onClick={()=>showHistory(index)}>{description}</button></li>;

});

    const winner=(box)=>{
            
            const Lines=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ];
            for(let i=0;i<Lines.length;i++)
            {
                const [a,b,c]=Lines[i];
                if(box[a] && box[a]===box[b] && box[a]===box[c])
                {
                    
                    return box[a];
                
                } 
            
            }
            return null;
        }

    const win=winner(box);
    const isDraw = !win && box.every((square) => square !== null);
    let status;
    if (win) {
        status = "Winner: " + win;
    } else if (isDraw) {
        status = "Match Completed: It's a Draw";
    } else {
        status = "Next Player: " + (nextStep ? "X" : "O");
    }

  return (
    <div className="game">
        <div className='board'>
            <Board box={box} isNext={nextStep} onPlay={handleOnPlay} status={status} match_status={win}/>
            </div>
        
        <div className="game-info">
            <ol>{move}</ol>
        </div>
    </div>
  )
}
