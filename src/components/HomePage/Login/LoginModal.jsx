/* eslint-disable react/prop-types */
import LoginContainer from "./LoginContainer";

const LoginModal = ({ show, onHide, onCloseClick, onSignUpClick, onSuccessLogin }) => {

  const handleSignUpClick = (value) => {
    onSignUpClick(value);
  };

  const handleOnSuccessLogin = (value) => {
    onSuccessLogin(value);
  };

  return (
    <>
      {show && (
        <LoginContainer onHide={onHide} onCloseClick={onCloseClick}  onSignUpClick={handleSignUpClick} onSuccessLogin={handleOnSuccessLogin}/>
      )}
    </>
  );
};

export default LoginModal;
