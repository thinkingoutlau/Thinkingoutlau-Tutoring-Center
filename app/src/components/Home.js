import React, { useState } from "react";
import Navbar from "./Navbar";

function Home({ state }) {
  // console.log("state at home", state);
  return (
    <>
      <div id="main">
        <header>
          <Navbar state={state} />
          <h3>
            <p>THINKINGOUTLAU TUTORING CENTER 🧮</p>
          </h3>
          <div className="quote">
            <p>
              "Teaching is more than imparting knowledge; it is inspiring
              change. Learning is more than absorbing facts; it is acquiring
              understanding.
            </p>
          </div>
        </header>
      </div>
    </>
  );
}

export default Home;
