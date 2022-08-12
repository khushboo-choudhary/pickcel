import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddNotes from "./components/AddNotes";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  const [notesId, setNotesId] = useState("");

  const getnotesIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setNotesId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddNotes id={notesId} setNotesId={setNotesId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <NotesList getnotesId={getnotesIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;