import React from "react";
import { useProfileTabsStyles } from "../../styles";
import { Hidden, Divider, Tabs } from "@material-ui/core";

function ProfileTabs({ isOwner, user }) {
  const classes = useProfileTabsStyles();

  return (
    <>
      <section className={classes.section}>
        <Hidden xsDown>
          <Divider />
        </Hidden>
        <Hidden xsDown>
          <Tabs></Tabs>
        </Hidden>
      </section>
    </>
  );
}

export default ProfileTabs;
