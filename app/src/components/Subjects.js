import React from "react";
import { Link } from "react-router-dom";

function Subjects() {
  return (
    <div>
      <p>
        <Link to="/algebra">Algebra I</Link>
      </p>
      <p>
        <Link to="/geometry">Geoemtry</Link>
      </p>
      <p>
        <Link to="/algebra2andtrig">Algebra II and Trigonometry</Link>
      </p>
      <p>
        <Link to="/precalculus">Precalculus</Link>
      </p>
      <p>
        <Link to="/calculus">Calculus</Link>
      </p>
    </div>
  );
}

export default Subjects;
