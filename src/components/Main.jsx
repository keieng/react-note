import React from "react";
import { Card, Form } from "react-bootstrap";

const Main = ({ activeNote }) => {
  const onEditNote = () => {};

  return (
    <Card className="vh-100 border-0">
      {/* <Card.Header className="d-flex">
        <span className="display-6">Note</span>
        <Button onClick={onAddNote} className="ms-auto">
        <FontAwesomeIcon icon={faAdd} className="me-1" />
        追加
        </Button>
      </Card.Header> */}
      <Card.Body>
        {!activeNote ? (
          <>
            <div className="h-100 d-flex justify-content-center text-secondary display-6">
              <p>ノートが選択されていません</p>
            </div>
          </>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="タイトル"
                value={activeNote?.title}
                onChange={(e) => onEditNote("title", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                placeholder="内容"
                rows="10"
                value={activeNote?.content}
                onChange={(e) => onEditNote("content", e.target.value)}
              />
            </Form.Group>
          </Form>
        )}
      </Card.Body>
      <div className="h-50 bg-light p-3">
        <h1>{activeNote?.title}</h1>
        {activeNote?.content}
      </div>
    </Card>
  );
};

export default Main;
