import React, { useState } from "react";
import { useProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { defaultCurrentUser } from "../data";
import {
  Hidden,
  Card,
  CardContent,
  Button,
  Typography,
  Dialog,
  Zoom,
  Divider,
  DialogTitle,
} from "@material-ui/core";
import ProfilePicture from "../components/shared/ProfilePicture";
import { Link } from "react-router-dom";
import { GearIcon } from "../icons";

function ProfilePage() {
  const isOwner = false;
  const classes = useProfilePageStyles();
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

  function handleOptionsMenuClick() {
    setShowOptionsMenu(true);
  }

  function handleCloseMenu() {
    setShowOptionsMenu(false);
  }

  return (
    <Layout
      title={`${defaultCurrentUser.name} (@${defaultCurrentUser.username})`}
    >
      <div className={classes.container}>
        <Hidden xsDown>
          <Card>
            <ProfilePicture isOwner={isOwner} />
            <CardContent className={classes.cardContentLarge}>
              <ProfileNameSection
                handleOptionsMenuClick={handleOptionsMenuClick}
                user={defaultCurrentUser}
                isOwner={isOwner}
              />
              <PostCountSection />
              <NameBioSection />
            </CardContent>
          </Card>
        </Hidden>
        <Hidden smUp>
          <Card className={classes.cardSmall}>
            <CardContent>
              <section className={classes.sectionSmall}>
                <ProfilePicture size={77} isOwner={isOwner} />
                <ProfileNameSection
                  handleOptionsMenuClick={handleOptionsMenuClick}
                  user={defaultCurrentUser}
                  isOwner={isOwner}
                />
              </section>
              <NameBioSection />
            </CardContent>
            <PostCountSection />
          </Card>
        </Hidden>
        {showOptionsMenu && <OptionsMenu handleCloseMenu={handleCloseMenu} />}
      </div>
    </Layout>
  );
}

function ProfileNameSection({ user, isOwner, handleOptionsMenuClick }) {
  const classes = useProfilePageStyles();
  const [showUnFollowDialog, setUnFollowDialog] = useState(false);

  let followButton;
  const isFollowing = true;
  const isFollower = false;

  if (isFollowing) {
    followButton = (
      <Button
        onClick={() => setUnFollowDialog(true)}
        variant="outlined"
        className={classes.button}
      >
        Following
      </Button>
    );
  } else if (isFollower) {
    followButton = (
      <Button variant="contained" className={classes.button}>
        Follow back
      </Button>
    );
  } else {
    followButton = (
      <Button variant="contained" className={classes.button}>
        Follow
      </Button>
    );
  }

  return (
    <>
      <Hidden xsDown>
        <section className={classes.usernameSection}>
          <Typography className={classes.username}>{user.username}</Typography>
          {isOwner ? (
            <>
              <Link to="/accounts/edit">
                <Button variant="outlined">Edit profile</Button>
              </Link>
              <div
                onClick={handleOptionsMenuClick}
                className={classes.settingsWrapper}
              >
                <GearIcon className={classes.settings} />
              </div>
            </>
          ) : (
            <>{followButton}</>
          )}
        </section>
      </Hidden>
      <Hidden smUp>
        <section>
          <div className={classes.usernameDivSmall}>
            <Typography className={classes.username}>
              {user.username}
            </Typography>
            {isOwner && (
              <div
                onClick={handleOptionsMenuClick}
                className={classes.settingsWrapper}
              >
                <GearIcon className={classes.settings} />
              </div>
            )}
          </div>
          {isOwner ? (
            <Link to="/accounts/edit">
              <Button variant="outlined" style={{ width: "100%" }}>
                Edit profile
              </Button>
            </Link>
          ) : (
            followButton
          )}
        </section>
      </Hidden>
      {showUnFollowDialog && (
        <UnfollowDialog onClose={() => setUnFollowDialog(false)} />
      )}
    </>
  );
}

function PostCountSection() {
  return <>Post Count Section</>;
}

function NameBioSection() {
  return <>Name Bio Section</>;
}

function OptionsMenu({ handleCloseMenu }) {
  const classes = useProfilePageStyles();
  const [showLogOutMessage, setLogOutMessage] = useState(false);

  function handleLogOutClick() {
    setLogOutMessage(true);
  }

  return (
    <Dialog
      open
      classes={{
        scrollPaper: classes.dialogScrollPaper,
        paper: classes.dialogPaper,
      }}
      TransitionComponent={Zoom}
    >
      {showLogOutMessage ? (
        <DialogTitle className={classes.dialog}>
          Logging out
          <Typography color="textSecondary">
            You need to log back in to continue using Instagram
          </Typography>
        </DialogTitle>
      ) : (
        <>
          <OptionsItem text="Change password" />
          <OptionsItem text="Nametag" />
          <OptionsItem text="Apps and Websites" />
          <OptionsItem text="Notifications" />
          <OptionsItem text="Privacy and Security" />
          <OptionsItem onClick={handleLogOutClick} text="Log out" />
          <OptionsItem text="Cancel" onClick={handleCloseMenu} />
        </>
      )}
    </Dialog>
  );
}

function OptionsItem({ text, onClick }) {
  return (
    <>
      <Button style={{ padding: "12px 8px" }} onClick={onClick}>
        {text}
      </Button>
      <Divider />
    </>
  );
}

export default ProfilePage;
