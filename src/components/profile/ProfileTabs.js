import React, { useState } from "react";
import { useProfileTabsStyles } from "../../styles";
import { Hidden, Divider, Tabs, Tab } from "@material-ui/core";

function ProfileTabs({ isOwner, user }) {
  const classes = useProfileTabsStyles();
  const [value, setValue] = useState(0);

  return (
    <>
      <section className={classes.section}>
        <Hidden xsDown>
          <Divider />
        </Hidden>
        <Hidden xsDown>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            classes={{
              indicator: classes.tabsIndicator,
            }}
          >
            <Tab></Tab>
          </Tabs>
        </Hidden>
      </section>
    </>
  );
}

export default ProfileTabs;
