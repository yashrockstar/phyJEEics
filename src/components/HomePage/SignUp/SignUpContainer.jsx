/* eslint-disable react/prop-types */
import "../../css/SignUp/SignUpContainer.css";
import SignUp from "./SignUp";

const SignUpContainer = ({ onHide, onCloseClick, onSignUpDoneClick, onLoginClick, onSuccessSignUp }) => {
  
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
    <div className="signup-container">
      <SignUp
        onHide={onHide}
        onCloseClick={onCloseClick}
        onSignUpDoneClick={handleSignUpDoneClick}
        onLoginClick={handleAlreadyLoginClick}
        onSuccessSignUp={handleSuccessSignUp}
      />
    </div>
  );
};

export default SignUpContainer;
