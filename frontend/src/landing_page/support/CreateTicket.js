import React from "react";
import { FaCoins, FaHandHoldingUsd } from "react-icons/fa";

function CreateTicket() {
  return (
    <div className="conatainer">
      <div className="row p-5 mt-5" style={{ marginLeft: "50px" }}>
        <h1 className="fs-2">To Create Ticket , select a relevant topic</h1>
        <div className="col-4 p-5 mb-5">
          <h4>
            <i class="fa fa-plus-circle" aria-hidden="true">
              {" "}
              Account opening
            </i>
          </h4>
          <ul className="text-muted mt-4" style={{ lineHeight: "2.5" }}>
            <li>Resident individual </li>
            <li>Minor</li>
            <li>Non Resident Indian(NRI)</li>
            <li>Company, Partnership, HUFandLLP</li>
            <li>Glossary</li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5">
          <h4>
            <i class="fa fa-user" aria-hidden="true">
              {" "}
              Your Zerodha Account
            </i>
          </h4>
          <ul className="text-muted mt-4" style={{ lineHeight: "2.5" }}>
            <li>Your Profile</li>
            <li>Account modification</li>
            <li>Client Master Report(CMR) and Depository Participant(DP)</li>
            <li>Nomination</li>
            <li>Transfer and conversion of securities</li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5">
          <h4>
            <i class="fa fa-suitcase" aria-hidden="true">
              {" "}
              Kite
            </i>
          </h4>
          <ul className="text-muted mt-4" style={{ lineHeight: "2.5" }}>
            <li>IPO Trading FAQs</li>
            <li>Margin Trading Facility (MTF) and Margins</li>
            <li>Charts and orders</li>
            <li>General</li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5">
          <h4>
            <i class="fa fa-handshake-o" aria-hidden="true">
              {" "}
              Fund
            </i>
          </h4>
          <ul className="text-muted mt-4" style={{ lineHeight: "2.5" }}>
            <li>Add money</li>
            <li>Withdraw money</li>
            <li>Add bank accounts</li>
            <li>eMandates</li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5">
          <h4>
            <i class="fa fa-stop-circle" aria-hidden="true">
              {" "}
              Console
            </i>
          </h4>
          <ul className="text-muted mt-4" style={{ lineHeight: "2.5" }}>
            <li>Portfolio</li>
            <li>Corporate actions</li>
            <li>Funds statement</li>
            <li>Reports</li>
            <li>Segments</li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5">
          <h4>
            <i class="fa fa-inr" aria-hidden="true">
              {" "}
              coin
            </i>
          </h4>
          <ul className="text-muted mt-4" style={{ lineHeight: "2.5" }}>
            <li>Mutual funds</li>            <li>National Pension Scheme (NPS)</li>
            <li>Fixed Deposit (FD)</li>
            <li>Features on Coin</li>
            <li>Payments and Orders</li>
            <li>General</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
