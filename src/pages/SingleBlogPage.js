import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
  const params = useParams();

  return <h1 style={{ color: "#fff", marginTop: "150px" }}>{params.title}</h1>;
};

export default SingleBlogPage;
