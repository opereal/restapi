import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BlogsPage from "../../pages/BlogsPage";
import ErrorPage from "../../pages/ErrorPage";
import AuthPage from "../../pages/AuthPage";
import AdminPage from "../../pages/AdminPage";
import SingleBlogPage from "../../pages/SingleBlogPage";

import ProtectedRoutes from "./ProtectedRoutes";
import Register from "../AuthComponents/Register";
import Login from "../AuthComponents/Login";

const AppRoutes = () => {
  const {user} = useSelector((state) => state.userState);
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />

      <Route path="/blogs/:title" element={<SingleBlogPage />} />

      <Route path="/get-started" element={<AuthPage />}>
        <Route path="sign-up" element={<Register />} />
        <Route path="sign-in" element={<Login />} />
      </Route>
{user && (
      <Route
        path="/admin"
        element={
          <ProtectedRoutes user={user}>
            <AdminPage />
          </ProtectedRoutes>
        }
      ></Route>
)}
    </Routes>
  );
};

export default AppRoutes;
