import React, { useState } from "react";
import { useEditProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import {
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { defaultCurrentUser } from "../data";
import ProfilePicture from "../components/shared/ProfilePicture";

function EditProfilePage({ history }) {
  const classes = useEditProfilePageStyles();
  const path = history.location.pathname;
  const [showDrawer, setDrawer] = useState(false);

  function handleToggleDrawer() {
    setDrawer((prev) => !prev);
  }

  function handleSelected(index) {
    switch (index) {
      case 0:
        return path.includes("edit");
      default:
        break;
    }
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

  function handleListClick(index) {
    switch (index) {
      case 0:
        history.push("/accounts/edit");
        break;
      default:
        break;
    }
  }

  const drawer = (
    <List>
      {options.map((option, i) => (
        <ListItem
          button
          key={option}
          selected={handleSelected(i)}
          onClick={() => handleListClick(i)}
          classes={{
            selected: classes.listItemSelected,
            button: classes.listItemButton,
          }}
        >
          <ListItemText primary={option} />
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
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden
            xsDown
            implementation="css"
            className={classes.permanentDrawerRoot}
          >
            <Drawer
              variant="permanent"
              anchor="left"
              open
              classes={{
                paper: classes.permanentDrawerPaper,
                root: classes.permanentDrawerRoot,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main>
          {path.includes("edit") && <EditUserInfo user={defaultCurrentUser} />}
        </main>
      </section>
    </Layout>
  );
}

function EditUserInfo({ user }) {
  const classes = useEditProfilePageStyles();

  return (
    <section className={classes.container}>
      <div className={classes.pictureSectionItem}>
        <ProfilePicture size={38} user={user} />
        <div className={classes.justifySelfStart}>
          <Typography className={classes.typography}>
            {user.username}
          </Typography>
          <Typography
            className={classes.typographyChangePic}
            variant="body2"
            color="primary"
          >
            Change Profile Photo
          </Typography>
        </div>
      </div>
      <form className={classes.form}></form>
    </section>
  );
}

function SectionItem(type = "text", text, formItem) {
  const classes = useEditProfilePageStyles();
  return (
    <div className={classes.SectionItemWrapper}>
      <aside>
        <Hidden xsDown></Hidden>
      </aside>
    </div>
  );
}

export default EditProfilePage;
