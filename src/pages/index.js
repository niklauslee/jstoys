import * as React from "react";
import { Helmet } from "react-helmet";
import "../components/eightro";
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
        <script src="/js/tetris.js" />
      </Helmet>
      <div>
        <h1>8tro.js</h1>
      </div>
      <div className="console">
        <div className="bezel">
          <canvas id="console-canvas" width={128} height={64}></canvas>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
