import React from "react";

export const Header = () => {
  return (
    <div className="">
      <div className="p-2 text-center">
        <h1>RaceSPro</h1>
        <span>Ready to rock and roll!</span>
      </div>

      <div className="d-flex justify-content-between bg-dark p-3">
        <a href="#" className="badge badge-info fs-6 borderAnimate">
          Motorbikes
        </a>
        <a href="#" className="badge badge-info fs-6 borderAnimate">
          Helmet
        </a>
        <a href="#" className="badge badge-info fs-6 borderAnimate">
          Contact
        </a>
      </div>
    </div>
  );
};
