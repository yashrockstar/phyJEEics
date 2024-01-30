/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../../css/Form.css";
import Hashing from "../../utility/Hashing";

export default function LoginForm({ onCloseClick, onSignUpClick, onSuccessLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setError('');
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleCloseClick = async (e) => {
    e.preventDefault(); // Prevent form submission

    const hashedPassword = await Hashing(password);

    console.log(
      JSON.stringify({
        email: email,
        password: hashedPassword,
      })
    );
    // API endpoint where you want to send data
    const apiEndpoint = "https://phyjeeics-backend.onrender.com/login";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: hashedPassword,
        }),
      });

      // Handle the response data
      const data = await response.json();
      if(data.error){
        console.log("Login unsuccessful:", data);
        setError(data.error);
      }else{
        console.log("Login successful:", data);
        onSuccessLogin(data);
        onCloseClick(true);
      }

      // Call the onCloseClick prop with the data if needed
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  };

  const handleSignUpClick = () => {
    onSignUpClick(true);
  };

  let styles = { display: "flex" };
  let styles2 = { color: "#f5a425" };

  let styles4 = { color: "#f5a425", cursor: "pointer", marginLeft: "auto" };
  let styles5 = { color: "grey" };
  let styles6 = { marginLeft: "2px", display: "flex" };

  return (
    <form>
       {showError && <div className="error-message">{error}</div>}
      <div className="email">
        <input
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={styles}>
        <button
          className="loginButton"
          style={styles2}
          onClick={handleCloseClick}
        >
          Login
        </button>
      </div>
      <div>
        <h3 className="accountSignUp" style={styles6}>
          <span className="account" style={styles5}>
            Don&apos;t have an account?{" "}
          </span>
          <a style={styles4} onClick={handleSignUpClick}>
            SignUp
          </a>
        </h3>
      </div>
    </form>
  );
}
