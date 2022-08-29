import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import RegisterStudent from "./registerStudent";
import RegisterTeacher from "./registerTeacher";

class Register extends React.Component{
   
    render() {
        return (
          <div className="App">
            
            <Container>
              <Row>
                <Col sm={4}></Col>
                <Col sm={4} >
                  <Tabs
                    defaultActiveKey="student"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    <Tab eventKey="student" title="Student">
                      <RegisterStudent />
                    </Tab>
                    <Tab eventKey="teacher" title="Teacher">
                      <RegisterTeacher />
                    </Tab>
                  </Tabs>
                </Col>
                <Col sm={4}></Col>
              </Row>
            </Container>
          </div>
        );
      }
}

export default Register