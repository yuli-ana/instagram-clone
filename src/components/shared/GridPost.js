import { Typography } from "@material-ui/core";
import React from "react";
import { useGridPostStyles } from "../../styles";

function GridPost({ post }) {
  const classes = useGridPostStyles();
  const { media, likes, comments } = post;

  return (
    <div className={classes.gridPostContainer}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>{likes}</Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>{comments.length}</Typography>
        </div>
      </div>
      <img src={media} alt="Post cover" className={classes.image} />
    </div>
  );
}

export default GridPost;
