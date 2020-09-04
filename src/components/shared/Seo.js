import React from "react";
import { Helmet } from "react-helmet";

function SEO({ title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </div>
  );
}

export default SEO;
