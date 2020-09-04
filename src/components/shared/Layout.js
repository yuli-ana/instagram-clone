import React from "react";
import { useLayoutStyles } from "../../styles";
import Seo from "../shared/Seo";
import Navbar from "../shared/Navbar";

function Layout({ children, title }) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <Seo title={title} />
      <Navbar></Navbar>
      <main className={classes.main}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

export default Layout;
