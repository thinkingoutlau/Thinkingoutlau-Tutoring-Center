import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Home({ state }) {
  console.log("state at home", state);

  return (
    <>
      <div id="main">
        <main>
          <img
            className="homepagePic"
            src="https://previews.123rf.com/images/delcreations/delcreations1904/delcreations190400074/121659457-word-welcome-written-on-a-stone-background-with-a-daisy.jpg"
          />
        </main>
      </div>
    </>
  );
}

export default Home;
