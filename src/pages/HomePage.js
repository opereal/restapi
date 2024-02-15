import { Fragment } from "react";
import Hero from "../components/HomeComponents/Hero";
import RecentBlogs from "../components/HomeComponents/RecentBlogs";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <RecentBlogs />
    </Fragment>
  );
};

export default HomePage;
