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
} from "@material-ui/core";
import ProfilePicture from "../components/shared/ProfilePicture";
import { Link } from "react-router-dom";
import { GearIcon } from "../icons";

function ProfilePage() {
  const isOwner = true;
  const classes = useProfilePageStyles();
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

  function handleOptionsMenuClick() {
    setShowOptionsMenu(true);
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
      </div>
    </Layout>
  );
}

function ProfileNameSection({ user, isOwner, handleOptionsMenuClick }) {
  const classes = useProfilePageStyles();

  let followButton;
  const isFollowing = false;
  const isFollower = false;

  if (isFollowing) {
    followButton = (
      <Button variant="outlined" className={classes.button}>
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
                <GearIcon />
              </div>
            </>
          ) : null}
        </section>
      </Hidden>
      <Hidden smUp></Hidden>
    </>
  );
}

function PostCountSection() {
  return <>Post Count Section</>;
}

function NameBioSection() {
  return <>Name Bio Section</>;
}

export default ProfilePage;
