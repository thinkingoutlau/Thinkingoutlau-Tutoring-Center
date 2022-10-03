import React from "react";
import { Link } from "react-router-dom";

function Subjects() {
  return (
    <div>
      <div className="subjects">
        <div>
          <img src="https://steamlearningclub.com/wp-content/uploads/2021/07/Algebra1.jpg" />
          <div className="link">
            <Link to="/algebra">Algebra I</Link>
          </div>
        </div>

        <div>
          <img src="https://wowsciencecamp.org/wp-content/uploads/2018/07/Copy-of-Geometry-1.jpg" />
          <div className="link">
            <Link to="/geometry">Geoemtry</Link>
          </div>
        </div>

        <div>
          <img src="https://i.ytimg.com/vi/C6PzJZVuIIo/maxresdefault.jpg" />
          <div className="link">
            <Link to="/algebra2andtrig">Algebra II & Trigonometry</Link>
          </div>
        </div>

        <div>
          <img src="https://www.sonomaschools.org/cms/lib/CA01802775/Centricity/Domain/1255/Precalculus.jpg" />
          <div className="link">
            <Link to="/precalculus">Precalculus</Link>
          </div>
        </div>

        <div>
          <img src="https://miro.medium.com/max/1400/0*B4u3Ot3ImnMhNKba.jpg" />
          <div className="link">
            <Link to="/calculus">Calculus</Link>
          </div>
        </div>

        <div>
          <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F318940459%2F453306169588%2F1%2Foriginal.20220715-004127?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=23%2C0%2C554%2C277&s=a38a48dd5896b418f0ee173cb9590e4b" />
          {/* <img src="http://newyorkschooltalk.org/wp-content/uploads/2018/06/shsatlogo.jpg" /> */}
          <div className="link">
            <Link to="/calculus">SHSAT Prep</Link>
          </div>
        </div>
        <div>
          <img src="http://atlantatutors.net/wp-content/uploads/2021/10/Onlione-SAT-Prep-Courses.jpeg" />
          <div className="link">
            <Link to="/calculus">SAT Prep</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
