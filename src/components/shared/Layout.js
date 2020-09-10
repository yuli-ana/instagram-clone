import React from "react";
import { useLayoutStyles } from "../../styles";
import SEO from "../shared/Seo";
import Navbar from "../shared/Navbar";

function Layout({ minimalNavbar = false, children, title, marginTop = 60 }) {
  const classes = useLayoutStyles();

  // MinimalNavBar is for the notFound page, default value = false

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar minimalNavBar={minimalNavbar} />
      <main className={classes.main} style={{ marginTop }}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

export default Layout;
