import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  if (!props.user) {
    return <Navigate to="/get-started/sign-in" />;
  }

  return props.children;
};

export default ProtectedRoutes;
