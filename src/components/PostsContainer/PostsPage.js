//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
  console.log(dummyData);
  // set up state for your data
  const [post] = React.useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {
        /* map through data here to return a Post and pass data as props to Post */
        post.map((object, index) => {
          return <Post key={index} post={object} />;
        })
      }
      ;
    </div>
  );
};

export default PostsPage;
