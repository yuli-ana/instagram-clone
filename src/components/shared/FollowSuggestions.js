import { Typography } from "@material-ui/core";
import React from "react";
import { useFollowSuggestionsStyles } from "../../styles";
import { Link } from "react-router-dom";
import { LoadingLargeIcon } from "../../icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FollowSuggestions() {
  const classes = useFollowSuggestionsStyles();

  let loading = true;

  return (
    <div className={classes.container}>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        className={classes.typography}
      >
        Suggestion For You
      </Typography>
      {loading ? <LoadingLargeIcon /> : <Slider />}
      <Link>
        <Typography variant="subtitle2" color="primary">
          See All
        </Typography>
      </Link>
    </div>
  );
}

export default FollowSuggestions;
