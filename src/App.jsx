import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <Main />
        </Col>
      </Row>
    </div>
  );
}

export default App;
