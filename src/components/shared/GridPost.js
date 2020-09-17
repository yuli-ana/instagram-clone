import React from "react";
import { useGridPostStyles } from "../../styles";

function GridPost({ post }) {
  const classes = useGridPostStyles();
  const { media } = post;

  return (
    <div>
      <img src={media} alt="" />
    </div>
  );
}

export default GridPost;
