import React, { useState } from "react";
import { useNavbarStyles } from "../../styles";
import { AppBar, Hidden, InputBase, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  LoadingIcon,
  AddIcon,
  LikeActiveIcon,
  LikeIcon,
  ExploreActiveIcon,
  ExploreIcon,
  HomeActiveIcon,
  HomeIcon,
} from "../../icons";
import NotificationList from "../notification/NotificationList";
import { defaultCurrentUser } from "../../data";

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && (
          <>
            <Search />
            <Links path={path} />
          </>
        )}
      </section>
    </AppBar>
  );
}

function Logo() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Instagram" className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}

function Search() {
  const classes = useNavbarStyles();
  const [query, setQuery] = useState("");
  let loading = false;

  return (
    <Hidden xsDown>
      <InputBase
        onChange={(e) => setQuery(e.target.value)}
        className={classes.input}
        placeholder="Search"
        value={query}
        startAdornment={<span className={classes.searchIcon} />}
        endAdornment={
          loading ? (
            <LoadingIcon />
          ) : (
            <span onClick={() => setQuery("")} className={classes.clearIcon} />
          )
        }
      />
    </Hidden>
  );
}

function Links({ path }) {
  const classes = useNavbarStyles();
  const [showList, setList] = useState(false);

  return (
    <div className={classes.linksContainer}>
      <div className={classes.linksContainer}>
        <Hidden xsDown>
          <AddIcon />
          <Link to="/">{path === "/" ? <HomeActiveIcon /> : <HomeIcon />}</Link>
          <Link to="/explore">
            {path === "/explore" ? <ExploreActiveIcon /> : <ExploreIcon />}
          </Link>
          <div className={classes.notifications}>
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
          <Link to={`${defaultCurrentUser}`}>
            {path === "/explore" ? <ExploreActiveIcon /> : <ExploreIcon />}
          </Link>
        </Hidden>
      </div>
    </div>
  );
}

export default Navbar;
