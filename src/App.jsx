import react, { useState } from "react";
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
import "./App.css";
import React from "react";
// import ModalIn from "./components/ModalIn";

const data = [
  { id: 1, personaje: "Naruto", anime: "Naruto" },
  { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  {
    id: 5,
    personaje: "Edward Elric",
    anime: "Fullmetal Alchemist: Brotherhood",
  },
  { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

function App({isOpen}) {
  
  const [open, setOpen] = useState(false);

  function abrir() {
    setOpen(!open);
  }
  


  return (
    <>
      <Container>
        <div className="textoMedio">
          <h1>Crud con react</h1>
        </div>
        <div className="botonIns">
          <Button
            onClick={abrir}
            variant="success"
          >
            Nuevo Registro
          </Button>
        </div>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Personaje</th>
              <th>Anime</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {data.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.personaje} </td>
                <td>{x.anime}</td>
                <td>
                  <Button variant="primary">Editar</Button>

                  <Button variant="danger">Borrar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={open}>
        <ModalHeader>
          <div>
            <h3>Insertar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label id="id">Id</label>
            <input id="id" name="id" className="form-control" readOnly />
          </FormGroup>

          <FormGroup>
            <label id="personaje">Personaje</label>
            <input name="personaje" id="personaje" className="form-control" type="text" />
          </FormGroup>

          <FormGroup>
            <label id="anime">Anime</label>
            <input name="anime" id="anime" className="form-control" type="text" />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button className="btn btn-danger" onClick={abrir}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
        
      </Container>
    </>
  );
}

export default App;
