import React, { useState } from "react";
import { Motorbikes } from "./motorbikes";
import { Helmet } from "./helmet";


export const Header = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  return (
    <div className="">
      <div className="p-2 text-center">
        <h1>RaceSPro</h1>
        <span>Ready to rock and roll!</span>
      </div>

      <div className="d-flex justify-content-between bg-dark p-3">
        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${activeTab === "motorbikes" && "active"}`}
          onClick={() => handleTabClick("motorbikes")}
        >
          Motorbikes
        </a>
        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${activeTab === "helmet" && "active"}`}
          onClick={() => handleTabClick("helmet")}
        >
          Helmet
        </a>
        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${activeTab === "contact" && "active"}`}
          onClick={() => handleTabClick("contact")}
        >
          Contact
        </a>
      </div>

      <div id="motorbikes" style={{ display: activeTab === "motorbikes" ? "block" : "none" }}>
        {/* Contenido de Motorbikes */}
        <Motorbikes></Motorbikes>
      </div>
      <div id="helmet" style={{ display: activeTab === "helmet" ? "block" : "none" }}>
        {/* Contenido de Helmet */}
        <Helmet></Helmet>
      </div>
      <div id="contact" style={{ display: activeTab === "contact" ? "block" : "none" }}>
        {/* Contenido de Contact */}
        <p>Contenido de Contact</p>
      </div>
    </div>
  );
};
