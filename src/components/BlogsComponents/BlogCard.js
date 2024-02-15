import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogCard = ({ title, description, content }) => {
  return (
    <Col lg={4} className="mb-4">
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

          <Card.Text>{content}</Card.Text>
          <Link to={""}></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
