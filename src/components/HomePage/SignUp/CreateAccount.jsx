/* eslint-disable react/prop-types */
import "../../css/SignUp/CreateAccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "./SignUpForm";

export default function CreateAccount({ onCloseClick, onSignUpDoneClick, onLoginClick, onSuccessSignUp}) {
  const handleCloseClick = () => {
    onCloseClick(true);
  };

  const handleSignUpDoneClick = () => {
    onSignUpDoneClick(true);
  };

  const handleLoginClick = () => {
    onLoginClick(true);
  }

  const handleSuccessSignUp = (value) => {
    onSuccessSignUp(value)
  }

  let styles1 = { color: "#f5a425" , cursor: "pointer", marginLeft: "auto"};
  let styles2 = { color: "grey" };
  let styles3 = { marginLeft: "5px", display: "flex"};

  return (
    <>
      <div className="SignUpPageLeft">
        <h1 style={{ fontWeight: "600", color: "white", marginBottom: "25px" }}>
          SIGN <em style={{ color: "#f5a425" }}>UP</em>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={handleCloseClick}
            style={{ color: "#f5a425", float: "right", cursor: "pointer" }}
          />
        </h1>
        <SignUpForm
          onCloseClick={onCloseClick}
          onSignUpClick={handleSignUpDoneClick}
          onSuccessSignUp = {handleSuccessSignUp}
        />
        <div>
          <h3 className="accountLogin" style={styles3}>
            <span className="account" style={styles2}>Already have an account? </span>
            <a style={styles1} onClick={handleLoginClick}>
              Login
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}
