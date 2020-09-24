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
            <Tab
              icon={<span className={classes.postIconLarge} />}
              label="POSTS"
              classes={{
                root: classes.tabRoot,
                labelIcon: classes.tabLabelIcon,
                wrapper: classes.tabWrapper,
              }}
            />
            {isOwner && (
              <Tab
                icon={<span className={classes.savedIconLarge} />}
                label="SAVED"
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabLabelIcon,
                  wrapper: classes.tabWrapper,
                }}
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp></Hidden>
      </section>
    </>
  );
}

export default ProfileTabs;
