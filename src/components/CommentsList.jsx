import React from "react";
import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  // Disclamer: Don't use index as key.
  return comments.map((comment, index) => (
    <div>
      <Comments key={index} data={comment} />
      <div className="ml-8 pl-5 border border-l-black">
        
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
