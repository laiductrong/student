import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LoginStudent from "./loginStudent";
import LoginTeacher from "./loginTeacher";
import { Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

class Login extends React.Component {

  render() {
    // const navigate = useNavigate()
    // const history = useHistory();
    // const navigateTo = () => history.push('/register');
    return (
      <div className="App">
        {/* <button onClick={navigateTo} type="button" /> */}
        {/* <button onClick={()=>{navigate("/register")}}>hi</button> */}
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
                  <LoginStudent />
                </Tab>
                <Tab eventKey="teacher" title="Teacher">
                  <LoginTeacher />
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
export default Login;
