const machines = ({kid, name, challenges, expanded, setExpanded, setCurrentChallenge}) => {
    const setMeUp = () => {
        if(expanded == kid){
            setExpanded(-1)
        }
        else{
            setExpanded(kid)
        }    
    }

    return (
        <div className='player-challenge-list'>
            <button onClick={setMeUp} className="player-challenge-button"> {expanded == kid ? "-" : "+"} {name}</button>
            <div>
                {expanded == kid && challenges.map((challenge, index) => (
                    <button className="player-challenge-compl-button"onClick={()=> {
                        console.log(kid, index)
                        setCurrentChallenge([kid,index])
                    }} key={index} >{challenge.name}</button>
                ))}
            </div>
        </div>
    )
}

export default machines