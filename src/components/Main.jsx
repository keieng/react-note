import React from "react";
import { Card, Form } from "react-bootstrap";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  /**
   * 編集したノートの内容でnotesを更新
   * @param {*} key
   * @param {*} value
   */
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modifyDate: Date.now(),
    });
  };

  return (
    <Card className="vh-100 border-0">
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
                htmlFor="title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                placeholder="内容"
                rows="10"
                value={activeNote?.content}
                onChange={(e) => onEditNote("content", e.target.value)}
                htmlFor="content"
              />
            </Form.Group>
          </Form>
        )}
      </Card.Body>
      <div className="h-50 bg-light p-3">
        <h1>{activeNote?.title}</h1>
        <ReactMarkdown>{activeNote?.content}</ReactMarkdown>
      </div>
    </Card>
  );
};

export default Main;
