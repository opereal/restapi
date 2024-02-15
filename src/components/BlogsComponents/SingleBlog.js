import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {getSingleBlog} from "../../lib/APIs/blogApi";

const SingleBlog = () => {
  const [blog, setBlog ]= useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();

const {title} = params;

  useEffect(() => {
  const onGetSingleBlog = async () => {
    const result = await getSingleBlog(title);

    if (result.error) {
      return setErrorMessage(result.error);
    }

    return setBlog(result);
  };

 onGetSingleBlog();
 },[title]);

return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col lg={8}>
        {blog && (
            <div style={{ color: "#fff"}}>
                <p>{blog.title}</p>
                <p>{blog.content}</p>
            </div>
        )}    
        </Col>
        <Col lg={4}></Col>
        </Row>
        </Container>
);
        };
          
    

export default SingleBlog;