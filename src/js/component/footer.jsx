import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-around p-1">
        <a href="mailto:arrmarbella@gmail.com?Subject=I%20am%20interested%20on%20your%20service.">
          <FontAwesomeIcon
            icon={faEnvelope}
            bounce
            size="2xl"
            style={{ color: "#FFFFFF" }}
          />
        </a>
        <a href="https://www.youtube.com/@KAWASAKIESP">
          <FontAwesomeIcon
            icon={faYoutube}
            bounce
            size="2xl"
            style={{ color: "#FFFFFF" }}
          />
        </a>
        <a href="https://www.instagram.com/racekawasaki?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
          <FontAwesomeIcon
            icon={faInstagram}
            bounce
            size="2xl"
            style={{ color: "#FFFFFF" }}
          />
        </a>
      </div>
      <div className="d-flex justify-content-evenly p-5">
        <a href="https://kawa-go.kawasaki.es/legal/contacto">Contacto</a>
        <span className="mx-1">|</span>
        <a href="https://kawa-go.kawasaki.es/legal/aviso-legal">Aviso legal</a>
        <span className="mx-1">|</span>
        <a href="https://kawa-go.kawasaki.es/legal/politica-privacidad">
          KME Política de privacidad
        </a>
        <span className="mx-1">|</span>
        <a href="https://kawa-go.kawasaki.es/legal/cookies">Aviso cookies</a>
      </div>
    </div>
  );
};
