import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import MainNav from "./MainNav";
import AppRoutes from "./AppRoutes";
import SEO from "../../helpers/SEO";

const Layout = () => {
  const location = useLocation();

  let titleData;

  const { pathname } = location;

  if (pathname === "/") {
    titleData = {
      title: "GoMyCode Blog - Home",
      metaDescription:
        "Home page of gomycode blog, the number one leading blog website in Nigeria",
    };
  } else if (pathname === "/get-started/sign-up") {
    titleData = {
      title: "Gomycode Blog - Sign up",
      metaDescription:
        "Sign up page of gomycode blog- you can sign up here to get started on gomycode blog",
    };
  } else if (pathname === "/get-started/sign-in") {
    titleData = {
      title: "Gomycode Blog - Sign In",
      metaDescription:
        "Sign in page of gomycode blog- you can sign in here to get started on gomycode blog",
    };
  } else {
    titleData = {
      title: "Error 404 - Page not found",
      metaDescription: "Page does not exist",
    };
  }

  SEO(titleData);
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
