import { useState } from "react";
import video from "../data/video";

const CommentButton = () => {
  const [displayComments, setdisplayComments] = useState("hide comments");

  const userComments = video.comments.map((comment) => {
   return( <>
      
      <h4>{comment.user}</h4>
      <h5>{comment.comment}</h5>
    </>
    )
  });

  const commenthandler = () => {
    if (displayComments === "hide comments") {
      setdisplayComments("show comments");
    } else if (displayComments === "show comments") {
      setdisplayComments("hide comments");
    }
  };

  return (
    <div>
      <button onClick={commenthandler}>{displayComments}</button>
      
      <div>
      <h3>{userComments.length} Comments</h3>
      {displayComments==="hide comments" ? userComments :null}
      </div>
    </div>
  );
};

export default CommentButton;
