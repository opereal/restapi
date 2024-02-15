import { Fragment, useState, useEffect } from "react";
import {useSelector} from "react-redux";
import {useLoginUserMutation} from "../../lib/APIS/authApi";
import { Form, Button } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Login = () => {
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");

const{user} = useSelector((state) => state.userState);

const navigate = useNavigate = useNavigate();

const [loginUser, { isLoading, isError, isSuccess, error, data}] =
useLoginUserMutation()

const onLoginUser = (event) => {
  event.preventDefault();

  if (!email || !password) {
    return;
  }

  loginUser({email, password})
}

useEffect(() => {
  if(isSuccess || user){
    navigate("/")
  }
}, [isSuccess,user])

  return (
    <Fragment>
      <div>
        <h2> Login Here </h2>
        <p>Login to get started</p>
      </div>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Email" type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Password" type="password" />
        </Form.Group>

        <Button type="submit" className={styles.submit_btn}>
          Login
        </Button>

        <p className={`${styles.links} ${styles.login}`}>
          {" "}
          Don't have an account ?{" "}
          <Link to={"/get-started/sign-up"}>Sign Up</Link>
        </p>

        <p className={styles.links}>
          {" "}
          Forgot Password ?{" "}
          <Link to={"/get-started/reset-password"}>Reset</Link>
        </p>
      </Form>
    </Fragment>
  );
};

export default Login;
