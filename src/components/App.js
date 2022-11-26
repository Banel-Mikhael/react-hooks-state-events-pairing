import video from "../data/video.js";
import React from "react";
import LikesButtons from "./LikesButtons.js"; 
import CommentButton from "./CommentButton.js";
function App() {
  console.log("Here's your data:", video);

  return (
    
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
     <h1>{video.title}</h1>
     <h4>{video.views} views | Uploaded {video.createdAt}</h4>
     <LikesButtons/>
     <CommentButton/>
     
    </div>
  );
}

export default App;
