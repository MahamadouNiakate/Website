import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h2>Welcome on my Website</h2>
          <p>This is an example with React, React bootstrap and react-router</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row classname="show-grid text-center">
          <Col xs={12} sm={4} className="pwserson-wrapper">
            <Image src="assets/person1.jpg" circle className="profile-pic" />
            <p>text of presentation for the person number 1</p>
          </Col>
          <Col xs={12} sm={4} className="pwserson-wrapper">
            <Image src="assets/person2.jpg" circle className="profile-pic" />
            <p>text of presentation for the person number 1</p>
          </Col>
          <Col xs={12} sm={4} className="pwserson-wrapper">
            <Image src="assets/person3.jpg" circle className="profile-pic" />
            <p>text of presentation for the person number 1</p>
          </Col>
        </Row>
      </div>
    );
  }
}
