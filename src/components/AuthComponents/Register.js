import {useState, useEffect, Fragment} from "react";
import {Form, Button}from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import {useCreateUserMutation} from "../../lib/APIs/userAp";
import styles from "./Auth.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const [createUser, { isError, error, isSuccess, isLoading}] =
   useCreateUserMutation();

   const onSubmitForm = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      return;
    }

    createUser({email,password,confirmPassword});
   };

   useEffect(() => {
    if(isSuccess) {
      navigate("/get-started/sign-in")
    }
   }, [isSuccess]);
   


  return (
    <Fragment>
      <div>
        <h2> Sign Up </h2>
        <p>Sign up to get started</p>
      </div>

      {isError && (
        <div class="alert alert-danger" role="alert">
          {error?.data?.error}
        </div>
      )}

      <Form onSubmit={onSubmitForm}>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Email" type="email"  onChange={(event) => setEmail(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Password" type="password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Confirm Password" type="password" />
        </Form.Group>

        <Button type="submit" className={styles.submit_btn}>
          Register
        </Button>

        <p className={styles.links}>
          {" "}
          Have an account ? <Link to={"/get-started/sign-in"}>Sign In</Link>
        </p>
      </Form>
    </Fragment>
  );
};

export default Register;
