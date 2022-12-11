import {
  faAdd,
  faNoteSticky,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Sidebar = ({ onAddNote, notes, onDeleteNote }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="vh-100 rounded-0">
        <Card.Header className="d-flex">
          <span className="display-6">
            {/* <FontAwesomeIcon icon={faNoteSticky} /> */}
            Note
          </span>
          <Button onClick={onAddNote} className="ms-auto">
            <FontAwesomeIcon icon={faAdd} className="me-1" />
            追加
          </Button>
        </Card.Header>
        <ListGroup variant="flush" className="overflow-auto">
          {notes.map((note, i) => (
            <ListGroup.Item action key={note.id}>
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
              <Button variant="danger" onClick={() => onDeleteNote(note.id)}>
                <FontAwesomeIcon icon={faTrash} className="me-1" />
                削除
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas
        show={show}
        backdrop={false}
        scroll={true}
        onHide={handleClose}
        keyboard={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
};

export default Sidebar;
