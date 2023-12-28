import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MyModal = () => {
  const [show, setShow] = useState(false);
  const [welcomeText, setWelcomeText] = useState("Bienvenido");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setWelcomeText("Bienvenido"); // Puedes cambiar el texto aquí según tus necesidades
  };

  return (
    <>
      <Button variant="inherit" onClick={handleShow}>
        <FontAwesomeIcon icon={faShoppingCart} size="xl" style={{ color: "#FFFFFF" }} />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Mi Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>{welcomeText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
