import React, { useState } from "react";
import { useNavbarStyles } from "../../styles";
import { AppBar, Hidden, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { LoadingIcon } from "../../icons";

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && <Search />}
        {!minimalNavbar && <Links />}
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

function Links() {
  return false;
}

export default Navbar;
