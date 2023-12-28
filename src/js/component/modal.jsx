import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="inherit"
        onClick={handleShow}
      >
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="xl"
          style={{ color: "#FFFFFF" }}
        />
        
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mi Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Contenido del modal...</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary">Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
