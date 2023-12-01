import React,{useState} from "react";

import {
  Button,
  Container,
  Modal,
  Table,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "react-bootstrap";

function ModalIn() {
  const [open, setOpen] = useState(false);

  
  function cerrar() {
    setOpen(!open);
  }
  
  return (
    <>
      <Modal show={open}>
        <ModalHeader>
          <div>
            <h3>Insertar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id</label>
            <input className="form-control" readOnly />
          </FormGroup>

          <FormGroup>
            <label>Personaje</label>
            <input className="form-control" type="text" />
          </FormGroup>

          <FormGroup>
            <label>Anime</label>
            <input className="form-control" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button className="btn btn-danger" onClick={cerrar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalIn;
