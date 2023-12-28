import React, { useState } from "react";
import { Motorbikes } from "./motorbikes";
import { Helmet } from "./helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  return (
    <div className="">
      <div className="p-3 text-center">
        <h1 id="tittleHeader">RaceSPro</h1>
        <span>Ready to rock and roll!</span>
      </div>
     

      <div className="d-flex justify-content-around bg-dark p-3">
        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${
            activeTab === "motorbikes" && "active"
          }`}
          onClick={() => handleTabClick("motorbikes")}
        >
          Motorbikes
        </a>
        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${
            activeTab === "helmet" && "active"
          }`}
          onClick={() => handleTabClick("helmet")}
        >
          Helmet
        </a>
      </div>

      <div className="text-center w-100">
        <img
          className="d-none d-md-block img-fluid"
          src="https://kawa-go.kawasaki.es/storage/images/options/1-header-kawa-go-1920x355.jpg"
          alt="Banner cabecera"
        />
        <img
          className="d-md-none  img-fluid"
          src="https://kawa-go.kawasaki.es/storage/images/options/2-header-kawa-go-1920x355 (1).jpg"
          alt="Banner cabecera"
        />
      </div>

      <div
        id="motorbikes"
        style={{ display: activeTab === "motorbikes" ? "block" : "none" }}
      >
        {/* Contenido de Motorbikes */}
        <Motorbikes></Motorbikes>
      </div>
      <div
        id="helmet"
        style={{ display: activeTab === "helmet" ? "block" : "none" }}
      >
        {/* Contenido de Helmet */}
        <Helmet></Helmet>
      </div>
      <div className="p-5">
        <div className="d-flex justify-content-around p-1">
          <a href="mailto:arrmarbella@gmail.com?Subject=I%20am%20interested%20on%20your%20service.">
            <FontAwesomeIcon
              icon={faEnvelope}
              bounce
              size="2xl"
              style={{ color: "#000000" }}
            />
          </a>
          <a href="https://www.youtube.com/@KAWASAKIESP">
            <FontAwesomeIcon
              icon={faYoutube}
              bounce
              size="2xl"
              style={{ color: "#000000" }}
            />
          </a>
          <a href="https://www.instagram.com/racekawasaki?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
            <FontAwesomeIcon
              icon={faInstagram}
              bounce
              size="2xl"
              style={{ color: "#000000" }}
            />
          </a>
        </div>
        <div className="d-flex justify-content-evenly p-5">
          <a href="https://kawa-go.kawasaki.es/legal/contacto">Contacto</a>
          <span className="mx-1">|</span>
          <a href="https://kawa-go.kawasaki.es/legal/aviso-legal">
            Aviso legal
          </a>
          <span className="mx-1">|</span>
          <a href="https://kawa-go.kawasaki.es/legal/politica-privacidad">
            KME Política de privacidad
          </a>
          <span className="mx-1">|</span>
          <a href="https://kawa-go.kawasaki.es/legal/cookies">Aviso cookies</a>
        </div>
      </div>
    </div>
  );
};
