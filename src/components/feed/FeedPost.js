import React from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {
  MoreIcon,
  ShareIcon,
  LikeIcon,
  CommentIcon,
  UnlikeIcon,
  SaveIcon,
} from "../../icons";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";

function FeedPost({ post }) {
  const classes = useFeedPostStyles();

  const { media, id, caption, likes } = post;

  return (
    <>
      <article className={classes.article}>
        {/* Feed post header */}
        <div className={classes.postHeader}>
          <UserCard />
          <MoreIcon className={classes.MoreIcon} />
        </div>
        {/* Feed post image */}
        <div>
          <img src={media} alt="Post media" className={classes.image} />
        </div>
        {/* Feed post image */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            {/* <LikeButton /> */}
            <Link to={`/p/:${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            {/* <SaveButton /> */}
          </div>
          <Typography className={classes.like} variant="subtitle2">
            <span>{likes === 1 ? "1 like" : `${likes} likes`}</span>
          </Typography>
        </div>
      </article>
    </>
  );
}

// function LikeButton() {}
// function SaveButton() {}

export default FeedPost;
