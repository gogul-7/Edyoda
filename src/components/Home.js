import React from "react";
import "./Home.css";
import Payment from "./Payment";
import Book from "../images/Icon.png";
import Clock from "../images/Icon-1.png";
import Live from "../images/Icon-2.png";
import Graduate from "../images/Icon-3.png";
import Ads from "../images/Icon-4.png";

function Home() {
  return (
    <div className="row">
      <div className="col col-1">
        <div>
          <p style={{ fontSize: "40px", fontWeight: "500" }}>
            Access curated courses worth
            <br />₹{" "}
            <span style={{ color: "red", textDecoration: "line-through" }}>
              <span style={{ color: "white" }}>18,500</span>
            </span>{" "}
            at just <span style={{ color: "#0096FF" }}>₹ 99</span> per year!
          </p>
        </div>
        <div className="unorderedList">
          <ul>
            <li>
              <img src={Book} alt="no-img"></img>
              <p style={{ fontSize: "25px", marginTop: "7px" }}>
                <span style={{ color: "#0096FF" }}>100+</span> Job relevant
                courses
              </p>
            </li>
            <li>
              <img src={Clock} alt="no-img"></img>
              <p style={{ fontSize: "25px", marginTop: "7px" }}>
                <span style={{ color: "#0096FF" }}>20,000+</span> Hours Of
                content
              </p>
            </li>
            <li>
              <img src={Live} alt="no-img"></img>
              <p style={{ fontSize: "25px", marginTop: "7px" }}>
                <span style={{ color: "#0096FF" }}>Exclusive</span> Webinar
                access
              </p>
            </li>
            <li>
              <img src={Graduate} alt="no-img"></img>
              <p style={{ fontSize: "25px", marginTop: "7px" }}>
                Scholarship Worth{" "}
                <span style={{ color: "#0096FF" }}>₹94,500</span>
              </p>
            </li>
            <li>
              <img src={Ads} alt="no-img"></img>
              <p style={{ fontSize: "25px", marginTop: "7px" }}>
                <span style={{ color: "#0096FF" }}>Ad Free</span> Learning
                Experience
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col col-2">
        <Payment />
      </div>
    </div>
  );
}

export default Home;
