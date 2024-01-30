/* eslint-disable react/prop-types */
import SignUpContainer from "./SignUpContainer";

const SignUpModal = ({ show, onHide, onCloseClick, onSignUpDoneClick, onLoginClick, onSuccessSignUp }) => {

  const handleSignUpDoneClick = (value) => {
    onSignUpDoneClick(value);
  };

  const handleAlreadyLoginClick = (value) => {
    onLoginClick(value);
  };

  const handleSuccessSignUp = (value) => {
    onSuccessSignUp(value);
  };

  return (
    <>
      {show && (
        <SignUpContainer onHide={onHide} onCloseClick={onCloseClick}  onSignUpDoneClick={handleSignUpDoneClick} onLoginClick={handleAlreadyLoginClick} onSuccessSignUp={handleSuccessSignUp}/>
      )}
    </>
  );
};

export default SignUpModal;
