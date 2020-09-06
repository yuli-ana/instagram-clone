import React from "react";
import { useSignUpPageStyles } from "../styles";
import Seo from "../components/shared/Seo";
import {
  Card,
  CardHeader,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginWithFacebook from "../pages/login";

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return (
    <>
      <Seo title="Sign up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <form action="">
              <TextField
                fullWidth
                variant="filled"
                label="Phone number, username, or email"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
              />
              <TextField
                fullWidth
                variant="filled"
                label="Password"
                margin="dense"
                className={classes.textField}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                fullWidth
              >
                Log In
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine} />
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue" />
            {/* <Button fullWidth color="secondary">
              <Typography variant="caption">Forgot password?</Typography>
            </Button> */}
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2" fullWidth>
              Don't have an account?
              <Link to="/accounts/emailsignup">
                {" "}
                <Button color="primary" className={classes.signUpButton}>
                  Sign up
                </Button>
              </Link>
            </Typography>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
