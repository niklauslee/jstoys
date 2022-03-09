import * as React from "react";
import { Helmet } from "react-helmet";
import { EightroConsole } from "../components/EightroConsole";
import "../styles/main.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div>
        <h1>8tro.js</h1>
      </div>
      <EightroConsole scale={1} url="/js/showcase.js" />
    </main>
  );
};

export default IndexPage;
