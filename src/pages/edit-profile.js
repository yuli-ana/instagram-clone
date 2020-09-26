import React, { useState } from "react";
import { useEditProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { IconButton, MenuIcon } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function EditProfilePage() {
  const classes = useEditProfilePageStyles();
  const [showDrawer, setDrawer] = useState(false);

  function handleToggleDrawer() {
    setDrawer((prev) => !prev);
  }

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
      </section>
    </Layout>
  );
}

export default EditProfilePage;
