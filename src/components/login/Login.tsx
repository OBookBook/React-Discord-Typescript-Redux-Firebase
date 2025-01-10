import { Button } from "@mui/material";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img src="./../../../public/vite.svg" alt="" />
      </div>
      <Button>Login</Button>
    </div>
  );
};

export default Login;
