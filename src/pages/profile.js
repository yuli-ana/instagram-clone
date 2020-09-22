import React from "react";
import { useProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { defaultCurrentUser } from "../data";
import { Hidden } from "@material-ui/core";

function ProfilePage() {
  const classes = useProfilePageStyles();

  return (
    <Layout
      title={`${defaultCurrentUser.name} (@${defaultCurrentUser.username})}`}
    >
      <div className={classes.container}>
        <Hidden xsDown></Hidden>
        <Hidden smUp>hey</Hidden>
      </div>
    </Layout>
  );
}

export default ProfilePage;
