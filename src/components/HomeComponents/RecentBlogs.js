import { Container, Row } from "react-bootstrap";
import BlogCard from "../BlogsComponents/BlogCard";
import blogs from "../../blogs"
import styles from "./Home.module.css";

const RecentBlogs = () => {

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <h1 className={`text-center mb-5 ${styles.recent_text}`}>
          Recent Blogs
        </h1>

        {blogs.map((blog) => {
          return <BlogCard {...blog} />;
        })}
      </Row>
    </Container>
  );
};

export default RecentBlogs;
