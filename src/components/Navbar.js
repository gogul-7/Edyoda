import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showdrop, setShowdrop] = useState(false);

  console.log(showdrop);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth < 890 ? setShow(true) : setShow(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="first_section">
        <p className="logo">EDYODA</p>
      </div>
      {show ? (
        <div className={`third_section ${show && "third_section2"}`}>
          <button className="menuBtn" onClick={() => setShowdrop(true)}>
            <Icon icon="mdi:menu" width={25} />
          </button>
          <div className={`dropList ${showdrop && "dropList2"}`}>
            <input placeholder="Search.."></input>
            <a className="listItem">Careers</a>
            <a className="listItem">Programs</a>
            <a className="listItem">Login</a>
            <a className="listItem">Join Us</a>
          </div>
        </div>
      ) : (
        <>
          <div className="second_section">
            <select className="dropdown">
              <option>Courses</option>
            </select>
            <select className="dropdown">
              <option>Programs</option>
            </select>
          </div>
          <div className="third_section">
            <div style={{ marginTop: "6px" }}>
              <Icon
                icon="material-symbols:search"
                width={"23px"}
                height={"21px"}
              />
            </div>
            <p>Log In</p>
            <button className="joinBtn">JOIN NOW</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
