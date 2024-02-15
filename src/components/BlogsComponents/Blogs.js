import {useState, useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import {getAllBlogs} from "../../lib/APIs/blogApi";
import styles from "./Blogs.module.css";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs ]= useState([]);
  const [errorMessage, setErrorMessage] = useState("");

 useEffect(() => {
  const onGetAllBlogs = async () => {
    const result = await getAllBlogs();
    if (result.error) {
      return setErrorMessage(result.error);
    }

    return setBlogs(result);
  };

 onGetAllBlogs();
 },[]);
  return (
    <Container style={{ marginTop: "150px" }}>
      <Row>
        {errorMessage && (
          <div class="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
       
        {blogs.map((blog) => {
          return <BlogCard key={blog._id} {...blog} />;
        })}
      </Row>
    </Container>
  );
};

export default Blogs;
