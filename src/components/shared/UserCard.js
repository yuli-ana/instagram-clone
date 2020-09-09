import React from "react";
import { useUserCardStyles } from "../../styles";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";

function UserCard({ user }) {
  const classes = useUserCardStyles();
  const { name, profile_image, username } = user;

  console.log(user);

  return (
    <div className={classes.wrapper}>
      <Link to={`/${username}`}>
        <Avatar
          src={profile_image}
          alt="User avater"
          className={classes.avatar}
        />
      </Link>
      <div className={classes.nameWrapper}>
        <Link to={`/${username}`}>
          <Typography variant="subtitle2" className={classes.typography}>
            {username}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.typography}
        >
          {name}
        </Typography>
      </div>
    </div>
  );
}

export default UserCard;

