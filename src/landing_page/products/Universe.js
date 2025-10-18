import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-4 text-muted mb-4 mt-5 ">The Zerodha Universe`</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted mt-2" style={{ fontSize: "0.8em" }}>Thematic investing platform <br/>
          that helps you invest in diversified <br/>
          baskets of stocks on ETFs.
</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "38%" }}
            alt=""
          />
          <p className="text-small mt-2 text-muted" style={{ fontSize: "0.8em" }}>
            Systematic trading platform<br/>
            that allows you to create and backtest<br/>
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "49%" }}
            alt=""
          />
          <p className="text-small mt-2 text-muted" style={{ fontSize: "0.8em" }}>
              Options trading platform that lets you <br/>
              create strategies, analyze positions, and examine <br/>
              data points like open interest, FII/DII, and more.
          </p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "40%" }}
            alt=""
          />
          <p className="text-small mt-2 text-muted" style={{ fontSize: "0.8em" }}>
            Our asset management venture <br/> that is creating simple and transparent
            index <br/> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ width: "38%" }}
            alt=""
          />
          <p className="text-small mt-2 text-muted" style={{ fontSize: "0.8em" }}>
            Investment research platform <br/>
            that offers detailed insights on stocks,<br/>
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "32%" }}
            alt=""
          />
          <p className="text-small mt-2 text-muted" style={{ fontSize: "0.8em" }}>
            Personalized advice on life<br/>
            and health insurance. No spam <br/>
            and no mis-selling.
          </p>
        </div>

        <button className='p-2 btn btn-primary mt-5 fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign Up for free</button>

        
      </div>
    </div>
  );
}

export default Universe;
