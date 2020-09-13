import React from "react";
import { useNavbarStyles } from "../../styles";

function NotificationTooltip() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.tooltipcontainer}>
      <div className={classes.tooltip}>
        <span aria-label="Followers"></span>
      </div>
    </div>
  );
}

export default NotificationTooltip;
 