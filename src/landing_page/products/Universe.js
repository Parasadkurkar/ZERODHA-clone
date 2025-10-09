import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <p className="text-center mt-5 fs-4">
          {" "}
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <div className="row mt-5  text-center">
        <h1 className="mt-5 fs-3 text-center text-muted">
          The Zerodha Universe
        </h1>
        <p className="mt-4 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row  p-5 text-muted">
        <div className="col-1"></div>
        <div className="col-3 text-center fs-6">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "70%" }}
            alt=""
          />
          <p className="mt-3">Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
            </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "90%" }}
            alt=""
          />
           <p className="mt-4">Our asset management venture
            that is creating simple and transparent index
            funds to help you save for your goals.
            </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 text-center">
          <img src="media/images/tijori.jpg" style={{ width: "60%" }} alt="" />
                    <p className="mt-1">Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.
                    </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Universe;
