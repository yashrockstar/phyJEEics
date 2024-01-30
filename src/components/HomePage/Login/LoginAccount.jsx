/* eslint-disable react/prop-types */
import "../../css/Login/LoginAccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./LoginForm";

export default function LoginAccount({ onCloseClick, onSignUpClick, onSuccessLogin }) {

  const handleCloseClick = () => {
    onCloseClick(true);
  };

  const handleSignUpClick = (value) => {
    onSignUpClick(value);
  };

  const handleOnSuccessLogin = (value) => {
    onSuccessLogin(value);
  };

  return (
    <>
      <div className="LoginPageLeft">
        <h1 style={{ fontWeight: "600", color: "white", marginBottom: "25px" }}>
          LOG <em style={{ color: "#f5a425" }}>IN</em>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={handleCloseClick}
            style={{ color: "#f5a425", float: "right", cursor: "pointer" }}
          />
        </h1>
        <LoginForm onCloseClick={onCloseClick} onSignUpClick={handleSignUpClick} onSuccessLogin={handleOnSuccessLogin}/>
      </div>
    </>
  );
}
