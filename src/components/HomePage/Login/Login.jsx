/* eslint-disable react/prop-types */
import "../../css/Login/Login.css";
import LoginAccount from "./LoginAccount";

export default function Login({ onCloseClick, onSignUpClick, onSuccessLogin }) {

  const handleSignUpClick = (value) => {
    onSignUpClick(value);
  };

  const handleOnSuccessLogin = (value) => {
    onSuccessLogin(value);
  };

  return (
    <div className="Login">
      <LoginAccount onCloseClick={onCloseClick} onSignUpClick={handleSignUpClick} onSuccessLogin={handleOnSuccessLogin} />
    </div>
  );
}
