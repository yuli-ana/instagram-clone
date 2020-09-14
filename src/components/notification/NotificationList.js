import React, { useRef } from "react";
import { useNotificationListStyles } from "../../styles";
import { defaultNotifications } from "../../data";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FollowButton from "../shared/FollowButton";
import useOutsideClick from "@rooks/use-outside-click";

function NotificationList({ handleHideList }) {
  const classes = useNotificationListStyles();
  const listContainerRef = useRef();

  useOutsideClick(listContainerRef, handleHideList);

  return (
    <Grid className={classes.listContainer} container>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === "like";
        const isFollow = notification.type === "follow";

        return (
          <Grid
            ref={listContainerRef}
            key={notification.id}
            item
            className={classes.listItem}
          >
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="User avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && `liked your photo. 4d`}
                  {isFollow && `started following you. 5d`}
                </Typography>
              </div>
              <div>
                {isLike && (
                  <Link to={`/p/${notification.post.id}`}>
                    <Avatar src={notification.post.media} alt="Post cover" />
                  </Link>
                )}
                {isFollow && <FollowButton />}
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
