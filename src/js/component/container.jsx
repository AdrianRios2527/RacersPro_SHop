import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Cards } from "./cards";


export const Container = () => {

  return (
    <div className="p-5">
      <div className="d-flex justify-content-evenly p-5">
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
      
    </div>
  );
};
