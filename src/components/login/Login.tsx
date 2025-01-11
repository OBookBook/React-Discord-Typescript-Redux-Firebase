import "./Login.scss";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signin = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err);
    });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="/images/vite.svg" alt="" />
      </div>
      <Button onClick={signin}>Login</Button>
    </div>
  );
};

export default Login;
