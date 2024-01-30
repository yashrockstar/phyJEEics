/* eslint-disable react/prop-types */
import "../../css/SignUp/SignUp.css";
import CreateAccount from "./CreateAccount";

export default function SignUp({ onCloseClick, onSignUpDoneClick, onLoginClick, onSuccessSignUp }) {

  const handleSuccessSignUp = (value) =>{
    onSuccessSignUp(value);
  }

  return (
    <div className="SignUp">
      <CreateAccount onCloseClick={onCloseClick} onSignUpDoneClick={onSignUpDoneClick} onLoginClick={onLoginClick} onSuccessSignUp={handleSuccessSignUp} />
    </div>
  );
}
