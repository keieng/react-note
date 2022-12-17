import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Offcanvas from "react-bootstrap/Offcanvas";

function App() {
  // ノート
  const [notes, setNotes] = useState([]);
  // 選択中のノートのidをセットする
  const [activeNoteId, setActiveNoteId] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ノートの追加
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "",
      createDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  /**
   * ノートを削除する関数
   * @param {*} id
   */
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const updateNote = () => {
    // 修正された新しいノートの配列を返す
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
  };

  /**
   * 選択中のノートの詳細を取得する
   * @returns
   */
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNoteId);
  };

  return (
    <div className="App">
      <Row className="g-0">
        <Col className="d-none d-sm-inline">
          <Sidebar
            onAddNote={onAddNote}
            notes={notes}
            onDeleteNote={onDeleteNote}
            isActive={activeNoteId}
            setIsActive={setActiveNoteId}
          />
        </Col>
        <Col sm="9">
          <Main activeNote={getActiveNote()} />
          {/* <Button variant="primary" className="d-sm-none" onClick={handleShow}>
            Launch
          </Button>

          <Offcanvas
            show={show}
            backdrop={false}
            scroll={true}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar
                onAddNote={onAddNote}
                notes={notes}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
              />{" "}
            </Offcanvas.Body>
          </Offcanvas> */}
        </Col>
      </Row>
    </div>
  );
}

export default App;
