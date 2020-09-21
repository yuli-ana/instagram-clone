import React from "react";
import { useMorePostsFromUserStyles } from "../../styles";
import { getDefaultPost, defaultUser } from "../../data";
import { LoadingLargeIcon } from "../../icons";
import { Typography } from "@material-ui/core";
import GridPost from "../shared/GridPost";

function MorePostsFromUser() {
  const classes = useMorePostsFromUserStyles();
  let loading = false;

  return (
    <>
      <Typography
        color="textSecondary"
        variant="subtitle2"
        component="h2"
        gutterBottom
        className={classes.typography}
      >
        Explore
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
    </>
  );
}

export default MorePostsFromUser;
