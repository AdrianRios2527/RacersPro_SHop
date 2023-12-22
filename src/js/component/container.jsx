import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Cards } from "./cards";

export const Container = () => {
  return (
    <div className="p-5">
      <div className="d-flex justify-content-evenly ">
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
      <div className="d-flex flex-wrap p-4" id="Motorbikes">
        <Cards
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Ninja_650_GN1_STU__2_.png "
          tittle="Ninja 400cc"
          texts="La moto deportiva Ninja® 400 ofrece la mayor cilindrada de la categoría, con 399cc, acompañada por la sofisticación de un motor bicilíndrico."
        />

        <Cards
          url=" https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Z900_RD1_STU__2_.png"
          tittle="Z900"
          texts="La Kawaski Z900 es uno de los modelos de más éxito de la marca japonesa. Es una moto naked de aspecto muy agresivo y deportivo con motor de cuatro cilindros en línea."
        />

        <Cards
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Z_H2_SE_GY2_STU__3_.png"
          tittle=" Z H2 SE"
          texts="Y así es como comprobamos que la Z H2 acelera como un demonio y es capaz de llegar a los 265 km/h en quinta"
        />

        
       
        <Cards
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Versys%20650_GN1_STU%20(1).001.png"
          tittle="VERSYS 650 2023"
          texts="La Versys 650 se ha diseñado con esta insólita combinación de suspensión de largo recorrido, llantas deportivas"
        />

        <Cards
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_W800__BK1_STU__2_.png"
          tittle="W800 2024
          "
          texts="W800, el último miembro de una dinastía de 50 años de Kawasaki W con una atención al detalle y
         un nivel de ingeniería artesanal que pocas máquinas poseen. Desde su facilidad de
         conducción hasta su evocador aspecto vintage, la W800 es la evolución del
         auténtico icono original, que hace que el ayer siga vivo hoy."
        />

        <Cards url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_KX65_GN1_STU__2_.png"
         tittle="KX65 2024"
         texts="Creadas para dominar y construidas para los ganadores, la KX65 y la KX85 son máquinas
         preparadas para la competición, diseñadas para estimular los brotes verdes del talento
         juvenil y permitir que florezcan en forma de victorias en carrera " />
      </div>
    </div>
  );
};
