import React, { useState } from "react";
import "./Payment.css";
import Pay from "../images/Razorpay Icon.png";

function Payment() {
  const [price, setPrice] = useState("0");

  const hanldeChange = (event) => {
    setPrice(event.target.value);
  };

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
        <p style={{ fontSize: "20px", fontWeight: "500", marginTop: "40px" }}>
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
              value={179}
              name="subscription"
              onChange={hanldeChange}
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
              value={149}
              name="subscription"
              onChange={hanldeChange}
            ></input>
            <label className="selectBox" for="third">
              6 Month Subscription
            </label>
            <input
              type="radio"
              id="fourth"
              value={99}
              name="subscription"
              onChange={hanldeChange}
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
          <p>₹{price}</p>
        </div>
        <div className="sub_third_part">
          <p>
            <span style={{ fontWeight: "500" }}>Total</span>
            {"("}Incl. of 18% GST{")"}
          </p>
          <p style={{ fontSize: "25px", fontWeight: "500" }}>₹{price}</p>
        </div>
        <div className="sub_third_part2">
          <button className="cancelBtn">CANCEL</button>
          <button className="proceedBtn">PROCEED TO PAY</button>
        </div>
        <div className="sub_third_part">
          <img src={Pay} alt="noImg" style={{ width: "100px" }}></img>
        </div>
      </div>
    </div>
  );
}

export default Payment;
