import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Sidebar = ({ onAddNote, notes, onDeleteNote, isActive, setIsActive }) => {
  return (
    <Card className="vh-100 rounded-0">
      <Card.Header className="d-flex">
        <span className="display-6">Note</span>
        <Button onClick={onAddNote} className="ms-auto">
          <FontAwesomeIcon icon={faAdd} className="me-1" />
          追加
        </Button>
      </Card.Header>
      <ListGroup variant="flush" className="overflow-auto rounded-0">
        {notes.map((note, i) => (
          <ListGroup.Item
            action
            key={note.id}
            active={note.id === isActive}
            onClick={() => setIsActive(note.id)}
          >
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <Card.Text>
              <small className="text-muted">
                {new Date(note.createDate).toLocaleDateString("ja-jp", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </Card.Text>
            <Button variant="light" onClick={() => onDeleteNote(note.id)}>
              <FontAwesomeIcon icon={faTrash} className="me-1" />
              削除
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Sidebar;
