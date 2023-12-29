import React, { useState } from "react";
import Swal from "sweetalert2";

export const Cards = (props) => {
  // Estados locales para controlar el texto y la clase del botón
  const [buttonText, setButtonText] = useState("Buy");
  const [buttonClass, setButtonClass] = useState("btn btn-success w-100");

  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    if (buttonText === "Buy") {
      // Mostrar alerta de compra exitosa
      Swal.fire({
        title: "Añadiremos su moto al carrito",
        icon: "success",
     
        customClass: {
          title: "my-custom-title",
          content: "my-custom-content",
         
        },
      });
    } else {
      // Mostrar alerta de cancelación de compra
      Swal.fire({
        title: "Compra cancelada",
        icon: "info",
        
        customClass: {
          title: "my-custom-title",
          content: "my-custom-content",
        
        },
      });
    }

    // Cambiar el texto del botón
    setButtonText((prevText) => (prevText === "Buy" ? "Cancelar" : "Buy"));

    // Cambiar la clase del botón
    setButtonClass((prevClass) => (prevClass === "btn btn-success w-100" ? "btn btn-primary w-100" : "btn btn-success w-100"));

    // Puedes agregar más lógica aquí si es necesario
  };

  return (
    <div className="card card1 bg-black text-white my-4" style={{ maxWidth: "20rem", width: "100%" }}>
      <img
        className="card-img-top"
        style={{ width: "100%", height: "40%" }}
        src={props.url}
        alt={props.tittle}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center mt-2">{props.tittle}</h5>
        <p className="card-text flex-grow-1 mt-2">{props.texts}</p>
        <div className="d-flex">
          <button className={buttonClass} onClick={handleButtonClick}>
            {buttonText} <br /> ${props.price}
          </button>
         
        </div>
      </div>
    </div>
  );
};
