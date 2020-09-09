import React, { useState } from "react";
import { useFollowButtonStyles } from "../../styles";
import { Button } from "@material-ui/core";

function FollowButton({ side }) {
  const classes = useFollowButtonStyles({ side });
  const [isfollowing, setFollowing] = useState(false);

  const followButton = (
    <Button
      className={classes.button}
      color="primary"
      variant={side ? "text" : "contained"}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      Follow
    </Button>
  );

  const followingButton = (
    <Button
      className={classes.button}
      variant={side ? "text" : "outlined"}
      onClick={() => setFollowing(false)}
      fullWidth
    >
      Following
    </Button>
  );

  return isfollowing ? followingButton : followButton;
}

export default FollowButton;
