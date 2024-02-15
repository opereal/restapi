import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Outlet />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
