import React, { useState, useEffect } from "react";
import "./Payment.css";
import Pay from "../images/Razorpay Icon.png";
import { Icon } from "@iconify/react";

function Payment() {
  const [price, setPrice] = useState("0");
  const [totalPrice, setTotalprice] = useState("0");
  const [offer, setOffer] = useState("0");
  const [selectedOption, setSelectedopotion] = useState(false);
  const formatOffer = new Intl.NumberFormat("en-US");

  const handleChange = (event) => {
    setTotalprice(event.target.value);
    const givenPrice = event.target.value.replace(",", "");
    const offerPrice = givenPrice * (99 / 100);
    setOffer(offerPrice);
    setPrice(givenPrice - offerPrice);
    setSelectedopotion(event.target.value);
  };

  useEffect((event) => {
    setSelectedopotion("18,500");
    handleChange({ target: { value: "18,500" } });
  }, []);

  return (
    <div className="main_body">
      <div className="first_part">
        <div>
          <p className="number1">1</p>
          <p>Sign Up</p>
        </div>
        <div>
          <p className="number2">2</p>
          <p>Subscribe</p>
        </div>
      </div>
      <div className="second_part">
        <p style={{ fontSize: "20px", fontWeight: "500", marginTop: "30px" }}>
          Select Your Subscription Plan
        </p>
        <form>
          <div style={{ padding: "1px", borderBottom: "1px solid" }}>
            <input
              type="radio"
              id="first"
              value="first"
              name="subscription_nil"
              disabled="disabled"
              checked="checked"
            ></input>
            <label className="selectBox" for="first">
              <div className="offerType1">
                <p>Offer Expired</p>
              </div>
              12 Month Subscription
            </label>
            <input
              type="radio"
              id="second"
              value={"18,500"}
              name="subscription"
              checked={selectedOption === "18,500"}
              onChange={handleChange}
            ></input>
            <label className="selectBox" for="second">
              <div className="offerType2">
                <p>Recommended</p>
              </div>
              12 Month Subscription
            </label>
            <input
              type="radio"
              id="third"
              value={"10,000"}
              checked={selectedOption === "10,000"}
              name="subscription"
              onChange={handleChange}
            ></input>
            <label className="selectBox" for="third">
              6 Month Subscription
            </label>
            <input
              type="radio"
              id="fourth"
              value={"5,000"}
              checked={selectedOption === "5,000"}
              name="subscription"
              onChange={handleChange}
            ></input>
            <label className="selectBox" for="fourth">
              3 Month Subscription
            </label>
          </div>
        </form>
      </div>
      <div className="third_part">
        <div className="sub_third_part">
          <p>Subscription Fee</p>
          <p>₹{totalPrice}</p>
        </div>
        <div className="offer_part">
          <div className="offerBox">
            <div style={{ width: "70%", height: "100%", marginTop: "-3px" }}>
              <span style={{ fontSize: "15px" }}>Limited time offer</span>
              <p
                style={{
                  fontSize: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <Icon
                  icon="mdi:av-timer"
                  color="#ff2f00"
                  width="23"
                  height="23"
                />
                Offer Vaid till 25th May 2023
              </p>
            </div>
            <div
              style={{ position: "relative", width: "40%", marginTop: "-5px" }}
            >
              <span
                style={{
                  color: "black",
                  display: "flex",
                  float: "right",
                  fontSize: "14px",
                }}
              >
                {"-" + formatOffer.format(offer)}
              </span>
            </div>
          </div>
        </div>
        <div className="sub_third_part">
          <p>
            <span style={{ fontWeight: "500" }}>Total</span>
            {"("}Incl. of 18% GST{")"}
          </p>
          <p style={{ fontSize: "25px", fontWeight: "500" }}>
            ₹{Math.round(price + price * (18 / 100))}
          </p>
        </div>
        <div className="sub_third_part2">
          <button className="cancelBtn">CANCEL</button>
          <button className="proceedBtn">PROCEED TO PAY</button>
        </div>
        <div className="sub_third_part" style={{ padding: "8px" }}>
          <img
            src={Pay}
            alt="noImg"
            style={{ width: "90px", height: "43px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Payment;
