import React, { useState } from "react";
import { useProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { defaultCurrentUser } from "../data";
import { Hidden, Card, CardContent } from "@material-ui/core";
import ProfilePicture from "../components/shared/ProfilePicture";

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
  return <>Profile Name Section</>;
}

function PostCountSection() {
  return <>Post Count Section</>;
}

function NameBioSection() {
  return <>Name Bio Section</>;
}

export default ProfilePage;
