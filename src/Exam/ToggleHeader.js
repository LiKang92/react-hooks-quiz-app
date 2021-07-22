import React from "react";
import { Jumbotron, Container} from "reactstrap";

export default function ToggleHeader() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-4">Computer Science Knowledge Test </h1>
      </Container>
    </Jumbotron>
  );
}