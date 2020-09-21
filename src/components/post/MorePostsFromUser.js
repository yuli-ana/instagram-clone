import React from "react";
import { useMorePostsFromUserStyles } from "../../styles";
import { getDefaultPost, defaultUser } from "../../data";
import { LoadingLargeIcon } from "../../icons";
import { Typography } from "@material-ui/core";
import GridPost from "../shared/GridPost";
import { Link } from "react-router-dom";

function MorePostsFromUser() {
  const classes = useMorePostsFromUserStyles();
  const { id, username, name } = defaultUser;
  let loading = false;

  return (
    <div className={classes.container}>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        component="h2"
        gutterBottom
        className={classes.typography}
      >
        More posts from{" "}
        <Link to={`/${username}`} className={classes.link}>
          {`@${username}`}
        </Link>
      </Typography>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {Array.from({ length: 20 }, () => getDefaultPost()).map((post) => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </div>
  );
}

export default MorePostsFromUser;
