import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);

    const handleAdd=()=>{
        const addTeam=team+1;
        setTeam(addTeam)
    }
    const handleReduce=()=>{
        const reduce=team-1;
        setTeam(reduce)
    }
    return(
        <div style={{border:"2px solid tomato", margin:"15px",padding:"20px"} }>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}