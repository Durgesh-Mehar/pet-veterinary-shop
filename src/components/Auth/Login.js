import React, { useRef, useContext } from "react";
import { useNavigate,Link } from "react-router-dom";
import AuthContext from "./AuthContext";

function Login() {
  const authCtx = useContext(AuthContext);
  const history = useNavigate();
  const emailInputref = useRef();
  const passwordInputref = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputref.current.value;
    const enteredpassword = passwordInputref.current.value;
    //localStorage.setItem("userEmail", enteredEmail);
    //const replcedmail = enteredEmail.replace("@", "").replace(".", "");

    //console.log(enteredEmail,enteredpassword)

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA8_s81px03_ZgvH0948868T6K6XoBBXMw",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredpassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            //this also return a promise
            let errormessage = "authenication Failed";
            throw new Error(errormessage);
          });
        }
      })
      .then((data) => {
        authCtx.Login(data.idToken);
        localStorage.setItem("token", data.idToken);

        //localStorage.setItem("xyz", replcedmail);

        localStorage.setItem("token", data.idToken);
        history("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" ref={emailInputref} />
      <input type="password" placeholder="Password" ref={passwordInputref} />
      <button onClick={handleLogin}>Login</button>
      <button style={{ margin: "20px" }}>
        <Link to="/signup">Signup</Link>
      </button>
      <p>
            We are passionate about providing the best care for your beloved
            pets. Our experienced team of veterinarians is dedicated to keeping
            your pets healthy and happy.
          </p>
    </div>
  );
}

export default Login;
