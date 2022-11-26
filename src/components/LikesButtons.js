import { useState } from "react"
import video from "../data/video"

const LikesButtons = ()=>{


    const [upVotes,setUpVotes]=useState(video.upvotes)
    const [downVotes,setDownVotes]=useState(video.downvotes)

    const handleUpVote =()=>{
        setUpVotes(prev => prev+1)
    }
    const handleDownVote =()=>{
        setDownVotes(prev => prev-1)
    }

    return (
        <>
        <button onClick={handleUpVote}>{upVotes} 👍</button>
        <button onClick={handleDownVote}>{downVotes} 👎</button>
        </>
    )
    
}

export default LikesButtons 