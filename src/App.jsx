import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "This one is a title",
      content: "This one is a text",
      createDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };
  return (
    <div className="App">
      <Row className="g-0">
        <Col>
          <Sidebar
            onAddNote={onAddNote}
            notes={notes}
            onDeleteNote={onDeleteNote}
          />
        </Col>
        <Col>
          <Main />
        </Col>
      </Row>
    </div>
  );
}

export default App;
