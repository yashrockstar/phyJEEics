/* eslint-disable react/prop-types */
import { useState } from "react";
import "../../css/Form.css";
import Hashing from "../../utility/Hashing";

export default function SignUpForm({  onSignUpClick, onSuccessSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUpClick = async (e) => {
    e.preventDefault();

    const hashedPassword = await Hashing(password);
  
    console.log(JSON.stringify({
      name: name,
      email: email,
      password: hashedPassword,
    }))
    // API endpoint where you want to send data
    const apiEndpoint = 'http://localhost:3000/signup';
  
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: hashedPassword,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Handle the response data
      const data = await response.json();
      console.log("signup successful:", data);
      onSuccessSignUp(data);
  
      // Call the onCloseClick prop with the data if needed
    } catch (error) {
      console.error('There was an error logging in:', error);
    }
    onSignUpClick(true);
  };

  let styles1 = { color: "#f5a425" };

  return (
    <form>
      <div className="name">
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <div>
        <button style={styles1} onClick={handleSignUpClick}>
          SignUp
        </button>
      </div>
    </form>
  );
}
