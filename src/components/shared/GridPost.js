import { Typography } from "@material-ui/core";
import React from "react";
import { useGridPostStyles } from "../../styles";
import { useHistory } from "react-router-dom";

function GridPost({ post }) {
  const history = useHistory();
  const classes = useGridPostStyles();
  const { media, likes, comments, id } = post;

  console.log(history);

  function handleOpenPostModal() {
    history.push({
      pathname: `/p/${id}`,
      state: {
        modal: true,
      },
    });
  }

  return (
    <div onClick={handleOpenPostModal} className={classes.gridPostContainer}>
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
