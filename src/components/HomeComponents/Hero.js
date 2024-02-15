import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import heroImage from "../../Assets/blogs.jpg";

const Hero = () => {
  return (
    <Container fluid className={styles.hero_container}>
      <Row>
        <Col md={6}>
          <div className={styles.hero_text_div}>
            <h1 className={styles.hero_header}> Who we are</h1>
            <p className={styles.hero_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit,
            </p>
            <p className={styles.hero_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit,
            </p>
            <p className={styles.hero_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident{" "}
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.hero_img_div}>
            <img src={heroImage} className={styles.blog_img} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
