import React from "react";
import { useNotificationListStyles } from "../../styles";
import { defaultNotifications } from "../../data";
import { Grid } from "@material-ui/core";

function NotificationList() {
  const classes = useNotificationListStyles();

  return (
    <Grid className={classes.listContainer} container>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === "like";

        return (
          
        )
       
      })}
    </Grid>
  );
}

export default NotificationList;
