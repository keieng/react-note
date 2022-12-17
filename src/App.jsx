import { useEffect, useState } from "react";
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
  // ノートの追加
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      createDate: Date.now(),
      modifyDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  /**
   * ノートを削除
   * @param {*} id
   */
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  /**
   * ノートを更新
   */
  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列を返す
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
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
        <Col className="col-3">
          <Sidebar
            onAddNote={onAddNote}
            notes={notes}
            onDeleteNote={onDeleteNote}
            activeNoteId={activeNoteId}
            setActiveNoteId={setActiveNoteId}
          />
        </Col>
        <Col className="col-9">
          <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
