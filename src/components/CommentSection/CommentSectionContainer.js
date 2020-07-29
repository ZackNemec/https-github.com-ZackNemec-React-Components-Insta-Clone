// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from "../../dummy-data";

const CommentSection = (props) => {
  console.log(dummyData);
  const [comments] = useState(props.comments);
  return (
    <div>
      {comments.map((comObj, comIndex) => {
        return <Comment key={comIndex} comment={comObj} />;
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
