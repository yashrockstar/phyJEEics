/* eslint-disable react/prop-types */
import "../../css/Login/LoginContainer.css";
import Login from "./Login";

const LoginContainer = ({ onHide, onCloseClick, onSignUpClick, onSuccessLogin }) => {

  const handleSignUpClick = (value) => {
    onSignUpClick(value);
  };

  const handleOnSuccessLogin = (value) => {
    onSuccessLogin(value);
  };

  return (
    <div className="login-container">
      <Login
          onHide={onHide}
          onCloseClick={onCloseClick}
          onSignUpClick={handleSignUpClick}
          onSuccessLogin={handleOnSuccessLogin}
        />
    </div>
  );
};

export default LoginContainer;
