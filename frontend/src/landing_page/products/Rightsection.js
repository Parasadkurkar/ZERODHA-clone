import React from "react";
function Rightsection(
{  imgurl,
  product,
  prodDescr,
  learnmore,}
) {
  return (
    <div className="container">
      <div className="row ">
        
        <div className="col-4  mt-5 p-5 text-muted">
          <h1  className="fs-3">{product}</h1>
          <p className="mt-4" >{prodDescr}</p>

          <div className="mb-4 fs-5 text-muted ">
            <a
              href={learnmore}
              style={{textDecoration: "none" }}
            >
              {learnmore} ➡
            </a>
          </div>
        </div>

        <div className="col-1"></div>
        
        <div className="col-7">
          <img
            src={imgurl} alt="" style={{width:"90%"}}
          />
        </div>
      </div>
    </div>
  );
}

export default Rightsection;
