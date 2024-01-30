/* eslint-disable react/prop-types */
import "../css/SocialLogin.css";

export default function SocialLogin({ socialName }) {
  switch (socialName) {
    case "google":
      return (
        <div className="SocialLogin">
          <p>Sign Up With Google </p>
          <i className="fab fa-google fa-2x"></i>
        </div>
      );
    case "facebook":
      return (
        <div className="SocialLogin">
          <p>Sign Up With Facebook </p>
          <i className="fab fa-facebook fa-2x"></i>
        </div>
      );
  }
}
