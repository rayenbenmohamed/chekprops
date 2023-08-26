import React from 'react'
import players from './data/player'
import Player from './Player'

const PlayerList = () => {
  return (
    <>
    <div className="player-list" style={{display:'flex',flexWrap:'wrap'}}>
    {players.map((data,index)=>(
        <Player data={data} key={index} />
    ))}
  </div>
  </>
  )
}

export default PlayerList
