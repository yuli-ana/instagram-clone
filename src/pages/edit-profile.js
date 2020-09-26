import React, { useState } from "react";
import { useEditProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { IconButton, Hidden, Drawer, List, ListItem } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function EditProfilePage() {
  const classes = useEditProfilePageStyles();
  const [showDrawer, setDrawer] = useState(false);

  function handleToggleDrawer() {
    setDrawer((prev) => !prev);
  }

  const options = [
    "Edit Profile",
    "Change Password",
    " Apps and Websites",
    "Email and SMS",
    "Push Notifications",
    " Manage Contacts",
    "Privacy and Security",
    "Login Activity",
    "Emails from Instagram",
  ];

  const drawer = (
    <List>
      {options.map((option, i) => (
        <ListItem button key={option} selected={i}>
          {option}
        </ListItem>
      ))}
    </List>
  );

  return (
    <Layout title="Edit profile">
      <section className={classes.section}>
        {/* MaterialUI */}
        <IconButton
          edge="start"
          onClick={handleToggleDrawer}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
        <nav>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={showDrawer}
              onClose={handleToggleDrawer}
              classes={{
                paperAnchorLeft: classes.temporaryDrawer,
              }}
            >
              {showDrawer && drawer}
            </Drawer>
          </Hidden>
        </nav>
      </section>
    </Layout>
  );
}

export default EditProfilePage;
