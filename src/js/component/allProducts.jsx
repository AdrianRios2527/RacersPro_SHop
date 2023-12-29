import React, { useState } from "react"; 
import { Cards } from "./cards";


export const AllProducts = () => {

  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };
  return (
    <div>
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

<div className="d-flex flex-wrap justify-content-around" id="Motorbikes">
        <Cards
          key="ninja"
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Ninja_650_GN1_STU__2_.png"
          title="Ninja 400cc"
          price="19.909"
          texts="La moto deportiva Ninja® 400 ofrece la mayor cilindrada de la categoría, con 399cc, acompañada por la sofisticación de un motor bicilíndrico."
        />

        <Cards
          key="z900"
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Z900_RD1_STU__2_.png"
          title="Z900"
          price="21.909"
          texts="La Kawaski Z900 es uno de los modelos de más éxito de la marca japonesa. Es una moto naked de aspecto muy agresivo y deportivo con motor de cuatro cilindros en línea."
        />

        <Cards
          url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Z_H2_SE_GY2_STU__3_.png"
          title="Z H2 SE"
          price="14.909"
          texts="Y así es como comprobamos que la Z H2 acelera como un demonio y es capaz de llegar a los 265 km/h en quinta"
        />
      </div>

      </div>
      <div
        id="helmet"
        style={{ display: activeTab === "helmet" ? "block" : "none" }}
      >
      
      <div className="d-flex flex-wrap justify-content-around" id="Helmets">
        <Cards
          url="https://www.motosgarrido.com/52032-large_default/casco-agv-pista-gp-rr-ece-2206-dot-limited-edition-valentino-rossi-assen-2007-blanco-azul-amarillo-fluor-rosa.jpg"
          title="AGV PISTA GP RR ECE 2206 DOT LIMITED"
          price="1.000"
          texts="El Pista GP RR es la réplica perfecta del casco de AGV utilizado durante las carreras por los campeones del mundial de motociclismo. Por eso ha recibido la nueva homologación FIM, que certifica el mayor nivel de protección posible, incluso de las peligrosas aceleraciones rotacionales de la cabeza."
        />

        <Cards
          url="https://www.motosgarrido.com/61719-large_default/casco-agv-k6-s-replica-franco-morbidelli-2021-multicolor.jpg"
          title="AGV K6 S REPLICA FRANCO "
          price="200"
          texts="El casco de carretera más ligero del mundo, versátil y adecuado para todo tipo de motociclistas, diseñado con tecnologías desarrolladas para los pilotos de MotoGP™."
        />

        <Cards
          url="https://www.motosgarrido.com/61665-large_default/casco-scorpion-exo-1400-evo-ii-air-accord-negro-azul-blanco.jpg"
          title="SCORPION EXO-1400 EVO I"
          price="270"
          texts="Su forma agresiva, construcción liviana y el nuevo sistema de súper ventilación superior muestran el compromiso de superar los límites. Prepárese para experimentar verdadera innovación."
        />
      </div>
      </div>
    
     
    </div>
  );
};
