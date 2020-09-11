import React, { useState, useEffect } from "react";
import { useNavbarStyles, WhiteTooltip } from "../../styles";
import {
  AppBar,
  Hidden,
  InputBase,
  Avatar,
  Typography,
  Fade,
} from "@material-ui/core";
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
import { defaultCurrentUser, getDefaultUser } from "../../data";
import { Grid } from "@material-ui/core";

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
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // If it's a non-empty string👇🏻 && results isn't empty array, it it's a true then add a tooltip
  const hasResults = Boolean(query) && results.length > 0;

  // Check if query is not empty
  useEffect(() => {
    if (!query.trim()) return;

    setResults(Array.from({ length: 5 }, () => getDefaultUser()));
  }, [query]);

  return (
    <Hidden xsDown>
      <WhiteTooltip
        arrow
        interactive
        TransitionComponent={Fade}
        open={hasResults}
        title={
          hasResults && (
            <Grid className={classes.resultContainer} container>
              {results.map((result) => (
                <Grid key={result.id} item className={classes.resultLink}>
                  <div className={classes.resultWrapper}>
                    <div className={classes.avatarWrapper}>
                      <Avatar src={result.profile_image} alt="User avatar" />
                    </div>
                    <div>
                      <Typography variant="body1">{result.username}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {result.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        }
      >
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
              <span
                onClick={() => setQuery("")}
                className={classes.clearIcon}
              />
            )
          }
        />
      </WhiteTooltip>
    </Hidden>
  );
}

function Links({ path }) {
  const classes = useNavbarStyles();
  const [showList, setList] = useState(false);

  function handleToggleList() {
    // Toggle state
    setList((prev) => !prev);

    return <div>{showList ? <NotificationList /> : ""}</div>;
  }

  return (
    <div className={classes.linksContainer}>
      <div className={classes.linksWrapper}>
        <Hidden xsDown>
          <AddIcon />
        </Hidden>
        <Link to="/">{path === "/" ? <HomeActiveIcon /> : <HomeIcon />}</Link>
        <Link to="/explore">
          {path === "/explore" ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <div className={classes.notifications} onClick={handleToggleList}>
          {showList ? <LikeActiveIcon /> : <LikeIcon />}
        </div>
        <Link to={`${defaultCurrentUser.username}`}>
          <div
            className={
              path === `/${defaultCurrentUser.username}`
                ? classes.profileActive
                : ""
            }
          ></div>
          <Avatar
            src={defaultCurrentUser.profile_image}
            className={classes.profileImage}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
